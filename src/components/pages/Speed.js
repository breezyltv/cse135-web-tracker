import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import SpeedAdmin from '../admin/SpeedAdmin';
import UserSpeedContent from '../layouts/UserSpeedContent';
import { isAdmin } from '../../actions/authActions'

class Speed extends Component {


render() {
  const {auth, isAdminStatus} = this.props;

  var speedContent = null;

  if(!auth.uid){
    return <Redirect to="/login" />
  }else {
    //check that the user is admin
    //console.log("admin: " + isAdminStatus)
    this.props.isAdmin();
    if(!isAdminStatus){
      speedContent = <UserSpeedContent uid={auth.uid}/>;
    }else{
      speedContent = <SpeedAdmin />;
    }

  }

  return (
    speedContent
  );
}
}

const mapStateToProps = (state, props) =>{
  return {
    auth: state.firebase.auth,
    isAdminStatus: state.auth.isAdminStatus
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    isAdmin:() => dispatch(isAdmin()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Speed);
