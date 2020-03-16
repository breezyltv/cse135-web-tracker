import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

class Manager extends Component {
  constructor(props) {
    super(props);
  }
render() {
  return (
    <div id="content-image">
      <h1>User Management</h1>

    </div>
  );
}
}
const mapStateToProps = (state, props) =>{
  console.log(state)
  return {
    auth: state.firebase.auth,
    //userData: state.firestore.ordered.users && state.firestore.ordered.users[0],

  };
}


export default compose(
 connect(mapStateToProps),
 firestoreConnect((props) => [
   { collection: 'users' },
   { collection: 'data'}
 ])
) (Manager);
