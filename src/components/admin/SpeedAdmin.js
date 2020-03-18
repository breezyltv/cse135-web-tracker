import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { isAdmin } from '../../actions/authActions';


function SpeedAdmin(props) {
  const {auth, userData, isAdminStatus} = props;

  if(!auth.uid){
    return <Redirect to="/login" />
  }else {
    //check that the user is admin
    props.isAdmin();
    if(!isAdminStatus){
      return <Redirect to="/reports/speed" />
    }

  }
  return (
    <div id="content-image">
        <div className="text-home"><h2>Performance Information for Admin !</h2></div>
        <table>
                <caption>Users Performance Information</caption>
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                { userData && userData.map(key => {
                  return(
                    <tr key={key.id}>
                      <th>{key.user_info.email}</th>
                      <td>{key.user_info.firstname.toUpperCase() + ' ' + key.user_info.lastname.toUpperCase()}</td>
                      <td>
                      <Link to={'/reports/speed/' + key.id} key={key.id}>
                        <button className="button btDetail" id="btDetail">
                          <i className="fas fa-info-circle"></i>
                        </button>
                      </Link>
                      </td>
                    </tr>
                  )
                })}
                </tbody>
              </table>
    </div>
  );
}

const mapStateToProps = (state, props) =>{
  return {
    auth: state.firebase.auth,
    userData: state.firestore.ordered.users,
    sessionData: state.firestore.ordered.data,
    isAdminStatus: state.auth.isAdminStatus
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    isAdmin:() => dispatch(isAdmin()),
  }
}

export default compose(
 connect(mapStateToProps, mapDispatchToProps),
 firestoreConnect((props) => [
   { collection: 'users' },
   { collection: 'data'}
 ])
) (SpeedAdmin);
