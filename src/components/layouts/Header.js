import React, {userContext} from 'react';
import { Link } from 'react-router-dom';
import firebaseAuth from '../../firebaseconfig';
import {UserContext} from '../../UserContext';

function Header() {
  return (
    <div id="header-idx">
    	<div id="header-idx-inner">
    	<div id="title-home">
    		<h1 className="title-home"><a href="/" rel="home">CSE135</a></h1>
    	</div>

    	<div className="nav-home">
    			<ul className="menu">
    				<li className="menu-item"><a href="/">Home</a></li>
    				<li><a href="/images">Images</a></li>
    				<li><a href="/form">Form</a></li>
    				<li><a href="/table">Table</a></li>
    				<li><a href="/external">Externals</a></li>
    				<li><a href="/showdb">Show DB</a></li>
            <li id="current-user"><a href="/login">Login</a></li>
    			</ul>
    		</div>
    		<div className="clear"></div>
    	</div>
    </div>
  );
}

export default Header;
