import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { isAdmin } from '../../actions/authActions';


function BrowserAdmin(props) {
  const {auth, userData, sessionData, isAdminStatus} = props;

  if(!auth.uid){
    return <Redirect to="/login" />
  }else {
    //check that the user is admin
    props.isAdmin();
    if(!isAdminStatus){
      return <Redirect to="/reports/browsers" />
    }

  }
  return (
    <div id="content-image">
        <div className="text-home"><h2>Browsers Information for Admin !</h2></div>
        <table>
                <caption>Users' Browsers Information</caption>
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
                      <Link to={'/reports/browsers/' + key.id} key={key.id}>
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
              <br />
            <table>
              <caption>Visitors' Browser Information</caption>
              <thead>
                <tr>
                  <th>Session ID</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
              { sessionData && sessionData.map(key => {
                return(
                  <tr key={key.id}>
                    <th>{key.id}</th>
                    <td>
                    <Link to={'/reports/browsers/session/' + key.id} key={key.id}>
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
) (BrowserAdmin);
