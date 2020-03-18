import browserHistory from '../history'

export const login = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(()=>{
      dispatch({type: 'LOGIN_SUCCESS'});
      browserHistory.push('/dashboard');
    }).catch((err) => {
      dispatch({type: 'LOGIN_FAILD', err});
    });
  }
}

export const logout = () =>{
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => {
      dispatch({type: 'LOGOUT_SUCCESS'});
      browserHistory.push('/login');
    }).then(()=>{
        console.log('is logging out...!')
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
  }
}

export const signUp = (credentials) => {
  return (dispatch, getState, {getFirebase, getFirestore}) =>{
    const firebase = getFirebase();
    const firestore = getFirestore();

    let userData = {
      firstname: credentials.firstname,
      lastname:   credentials.lastname,
      email: credentials.email,
      role: "viewer"
    };

    firebase.auth().createUserWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then((res)=>{
      //save user info to firestore
      return firestore.collection('users').doc(res.user.uid).set(
        {user_info: userData}
      )

    }).then(() =>{
      dispatch({type: 'SIGNUP_SUCCESS'});
      browserHistory.push('/dashboard');
    }).catch(function(error) {
      // Handle Errors here.
      //var errorCode = error.code;
      var errorMessage = error.message;
      dispatch({type: 'SIGNUP_ERROR', errorMessage})
    });
  }
}

export const addAdminRole = (email, id) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    console.log('is uopdata id:' + id)
    const addAdminRole = firebase.functions().httpsCallable('addAdminRole');
    addAdminRole({ email: email }).then(result => {

      firestore.collection('users').doc(id).update({
        "user_info.role" : "admin"
      }).then(() => {
        dispatch({ type: 'UPDATE_ROLE_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'UPDATE_ROLE_ERROR' }, err);
      });

      console.log(result);
      dispatch({type: 'UPDATA_ADMIN_SUCCESS', result});
    });
  }
}

export const deleteUser = (email) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const deleteUser = firebase.functions().httpsCallable('deleteUser');
    deleteUser({ email: email }).then(result => {

      firestore.collection('users').doc(email).delete().then(() => {
        dispatch({ type: 'DELETE_USER_DATA_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'DELETE_USER_DATA_ERROR' }, err);
      });

      console.log(result);
      dispatch({type: 'DELETE_USER_SUCCESS', result});
    });
  }
}

export const deleteSession = (id) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection("data").doc(id).delete().then(function() {
      dispatch({ type: 'DELETE_SESSION_SUCCESS' });
    }).catch(function(error) {
        //console.error("Error removing document: ", error);
        dispatch({ type: 'DELETE_SESSION_ERROR', error });
    });
  }
}


export const isAdmin = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().currentUser.getIdTokenResult()
    .then((idTokenResult) => {
       // Confirm the user is an Admin.
       if (!!idTokenResult.claims.admin) {
         console.log("is admin!!! " + idTokenResult.claims.admin);
          dispatch({ type: 'IS_ADMIN', idTokenResult });
       } else {
         console.log("is not admin!!!");
         dispatch({ type: 'IS_NOT_ADMIN', idTokenResult });
         //browserHistory.push('/dashboard');
       }
    }).catch((error) => {
      console.log(error);
    });
  }
}
