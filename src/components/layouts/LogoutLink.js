import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';

function LogoutLink(props) {
  const {userData} = props;
  var lastname;
  if(userData){
    lastname = userData.user_info.lastname;
  }
  return (
    <div className="nav-home">
        <ul className="menu">
          <li className="menu-item"><a href="/dashboard">Dashboard</a></li>
          <li><a href="/images">Images</a></li>
          <li><a href="/form">Form</a></li>
          <li><a href="/table">Table</a></li>
          <li><a href="/external">Externals</a></li>
          <li><a href="/showdb">Show DB</a></li>
          <li className="current-user"><a href="/account">hi, {lastname}</a></li>
          <li className="current-user"><a href="/manager">Manager</a></li>
          <li className="current-user"><a href="/logout">Logout</a></li>
        </ul>
    </div>

  );
}

const mapStateToProps = (state) =>{
  return {
    auth: state.firebase.auth,
    userData: state.firestore.ordered.users && state.firestore.ordered.users[0]
  };
}


export default compose(
 connect(mapStateToProps),
 firestoreConnect((props) => [
   { collection: 'users', doc: props.auth.uid }
 ])
) (LogoutLink);
