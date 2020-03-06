import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div id="header-idx">
    	<div id="header-idx-inner">
    	<div id="title-home">
    		<h1 class="title-home"><a href="#" rel="home">CSE135</a></h1>
    	</div>

    	<div class="nav-home">
    			<ul class="menu">
    				<li class="menu-item"><a href="/">Home</a></li>
    				<li><a href="/images">Images</a></li>
    				<li><a href="/form">Form</a></li>
    				<li><a href="/table_and_lists">Table</a></li>
    				<li><a href="/external">Externals</a></li>
    				<li><a href="/showdb">Show DB</a></li>
            <li id="current-user"><a href="/login">Login</a></li>
    			</ul>
    		</div>
    		<div class="clear"></div>
    	</div>
    </div>
  );
}

export default Header;
