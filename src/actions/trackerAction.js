import Cookies from 'js-cookie';

export const createDataNoUser = (data) => {
  return (dispatch, getState, {getFirestore}) => {
    console.log(data);
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('data').add({
        static_data: data
    }).then((res) => {

      console.log('set cookie with ID: ' + res.id)
      Cookies.set('tracker', res.id);
    }).then(() => {
      dispatch({ type: 'CREATE_DATA_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_DATAERROR' }, err);
    });
  }
};

export const updateData = (id, page_name, static_data, performance_data, dynamic_data, logged) => {
  return (dispatch, getState, {getFirestore}) => {
    console.log('Updating data with ID: '+ id +" and page: "+ page_name);
    if(page_name === 'reports/speed'){
      page_name = 'reports_speed';
    }else if(page_name === 'reports/browsers'){
      page_name = 'reports_browsers';
    }
    // make async call to database
    const firestore = getFirestore();
    var db;
    if(logged){
      db = firestore.collection('users');
      if(page_name === "")
        page_name = 'dashboard'
    }else {
      db = firestore.collection('data');
      if(page_name === "")
        page_name = 'index'
    }

    //update for performance and static data
    db.doc(id).update({
        static_data: static_data,
        [page_name]: performance_data,
        dynamic_data: dynamic_data,
    }).then(() => {
      dispatch({ type: 'UPDATE_DATA_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'UPDATE_DATA_ERROR' }, err);
    });
  }
};
