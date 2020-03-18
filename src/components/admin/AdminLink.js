import React from 'react';


function AdminLink(props) {
  return (
    <div className="nav-home">
        <ul className="menu">
          <li className="menu-item"><a href="/dashboard">Dashboard</a></li>
          <li><a href="/images">Images</a></li>
          <li><a href="/form">Form</a></li>
          <li><a href="/table">Table</a></li>
          <li><a href="/external">Externals</a></li>
          <li><a href="/showdb">Show DB</a></li>
          <li className="current-user"><a href="/account">hi, {props.lastname}</a></li>
          <li className="current-user"><a href="/manager"><i className="fas fa-tasks"></i></a></li>
          <li className="current-user"><a href="/logout"><i className="fas fa-sign-out-alt"></i></a></li>
        </ul>
    </div>

  );
}




export default AdminLink;
