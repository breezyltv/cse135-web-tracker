import React from 'react';

function LogoutLink() {

  return (
    <div className="nav-home">
        <ul className="menu">
          <li className="menu-item"><a href="/dashboard">Dashboard</a></li>
          <li><a href="/images">Images</a></li>
          <li><a href="/form">Form</a></li>
          <li><a href="/table">Table</a></li>
          <li><a href="/external">Externals</a></li>
          <li><a href="/showdb">Show DB</a></li>
          <li id="current-user"><a href="/logout">Logout</a></li>
        </ul>
    </div>

  );
}



export default LogoutLink;
