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
    }).then(()=>{
        console.log('is logging out...!')
        browserHistory.push('/login');
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
      browserHistory.push('/dashboard');
      dispatch({type: 'SIGNUP_SUCCESS'});
    }).catch(function(error) {
      // Handle Errors here.
      //var errorCode = error.code;
      var errorMessage = error.message;
      dispatch({type: 'SIGNUP_ERROR', errorMessage})
    });
  }
}
