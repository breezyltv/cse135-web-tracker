import React from 'react';
import LogoutLink from './LogoutLink';
import LoginLink from './LoginLink';
import AdminLink from '../admin/AdminLink';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';

function Header(props) {

  const {auth} = props;
  const {userData} = props;
  var lastname;
  var userNavLink;
  if(auth.uid){
    if(userData){
      lastname = userData.user_info.lastname;
      var admin = userData.user_info.role;
      if(admin === 'admin'){
        userNavLink = <AdminLink lastname={lastname} />
      }else {
        userNavLink = <LogoutLink lastname={lastname} />
      }
    }
    console.log("Role is: " + admin)
  }else{
    userNavLink = <LoginLink />
  }

  return (
    <div id="header-idx">
    	<div id="header-idx-inner">
    	<div id="title-home">
    		<h1 className="title-home"><a href="/" rel="home">CSE135</a></h1>
    	</div>

		    {userNavLink}

    	<div className="clear"></div>
    	</div>
    </div>
  );
}

const mapStateToProps = (state, props) =>{
  return {
    auth: state.firebase.auth,
    userData: state.firestore.data.users && state.firestore.data.users[props.uid]
  };
}

export default compose(
 connect(mapStateToProps),
 firestoreConnect((props) => [
   { collection: 'users', doc: props.uid }
 ])
) (Header);
