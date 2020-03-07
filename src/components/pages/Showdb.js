import React, { Component } from 'react';

class Showdb extends Component {
render() {
  return (
    <div id="content-image">
        <h2>SHOW DATABASE FROM FIREBASE</h2>
        <hr />

        <br />
        <input type="button" className="button" id="btShowDB" value="SHOW DATABASE"></input>
        <div id="my-static-data"></div>
        <div id="my-perf-data"></div>
        <div id="my-dynamic-data"></div>

    </div>
  );
}
}
export default Showdb;
