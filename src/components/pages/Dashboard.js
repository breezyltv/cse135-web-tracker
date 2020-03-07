import React, { Component } from 'react';

class Dashboard extends Component {
render() {
  return (
    <div id="content-home">
        <div className="text-home"><h2>Welcome you to dashboard</h2></div>
          <div id="nav-list">
            <nav>
            <h3><a href="/reports/speed">Speed</a></h3>
            <h3><a href="/reports/browsers">Browers</a></h3>
            </nav>
          </div>

    </div>
  );
}
}
export default Dashboard;
