 import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import {createTableStaticData} from '../../tracker';
import { isAdmin } from '../../actions/authActions'
import BrowserAdmin from '../admin/BrowserAdmin'
import UserBrowserContent from '../layouts/UserBrowserContent';

class Browers extends Component {


render() {

  const {auth, isAdminStatus} = this.props;

  var browserContent = null;

  if(!auth.uid){
    return <Redirect to="/login" />
  }else {
    //check that the user is admin
    //console.log("admin: " + isAdminStatus)
    this.props.isAdmin();
    if(!isAdminStatus){
      browserContent = <UserBrowserContent uid={auth.uid}/>;
    }else{
      browserContent = <BrowserAdmin />;
    }

  }


  return (
      browserContent
  );
}
}

const mapStateToProps = (state, props) =>{

  return {
    auth: state.firebase.auth,
    isAdminStatus: state.auth.isAdminStatus,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    isAdmin:() => dispatch(isAdmin()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Browers);
