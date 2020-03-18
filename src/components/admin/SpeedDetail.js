import React, { Component } from 'react';
import ZingGrid from "zinggrid";
import { Redirect } from 'react-router-dom';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { isAdmin } from '../../actions/authActions';

function SpeedDetail(props) {

  const {auth, userData, isAdminStatus} = props;

  if(!auth.uid){
    return <Redirect to="/login" />
  }else {
    //check that the user is admin
    props.isAdmin();
    if(!isAdminStatus){
      return <Redirect to="/reports/speed" />
    }else{
      if(userData){
        var email = userData.user_info.email;
        //console.log(userData)
        var performance_data = {};
        Object.keys(userData).forEach((key) => {
            if(key !== "static_data" && key !== 'user_info' && key !== 'id' && key !== "dynamic_data"){
                performance_data[key] = userData[key];
            }
        });
    }
  }

    //console.log(performance_data);
  }

  return (
    <div id="content-image">
        <div className="text-home"><h2>Performance Page Detail !</h2></div>
        <zing-grid id="helloWorld"
        sort
        search
        pager
        page-size="5"
        page-size-options="2,5,15"
        caption={'Data from: ' + email} data={JSON.stringify(performance_data)} loading></zing-grid>

    </div>
  );
}

const mapStateToProps = (state, ownProps) =>{
  const id = ownProps.match.params.id;
  const data = state.firestore.data.users;
  const user_data = data ? data[id] : null;

  return {
    auth: state.firebase.auth,
    userData: user_data,
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
   { collection: 'users', doc: props.match.params.id }
 ])
) (SpeedDetail);
