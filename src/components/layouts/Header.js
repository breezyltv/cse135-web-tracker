import React from 'react';
import LogoutLink from './LogoutLink';
import LoginLink from './LoginLink';
import { connect } from 'react-redux';

function Header(props) {

  const {auth} = props;
  const userNavLink = auth.uid ? <LogoutLink /> : <LoginLink />

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

const mapStateToProps = (state) =>{
  return {
    auth: state.firebase.auth
  };
}

export default connect(mapStateToProps)(Header);
