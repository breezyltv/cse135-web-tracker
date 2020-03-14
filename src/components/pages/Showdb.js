import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { createTableStaticData, createTablePerformanceData } from '../../tracker';

class Showdb extends Component {

  constructor(props) {
    super(props);
    this.btShowDB = this.showDB.bind(this);
  }

  showDB(){
    const { trackerData, auth } = this.props;
    const query = Cookies.get('tracker');
    console.log(trackerData[query].static_data);
    var data = trackerData[query].static_data;

    document.getElementById('my-static-data').innerHTML
    = createTableStaticData(trackerData[query].static_data);
    document.getElementById('visitor_session').innerHTML
    = '<h2>Your session ID: ' + query + '</h2>';

    var per_data = trackerData[query];
    var performance = "";
    Object.keys(per_data).forEach((key) => {
        if(key != "static_data" && key != 'user_info'){
            performance += createTablePerformanceData(per_data[key], key);
        }
    });
    document.getElementById('my-perf-data').innerHTML
    = performance;
  }

render() {

  return (
    <div id="content-image">
        <h2>SHOW DATABASE FROM FIREBASE</h2>
        <hr />

        <br />
        <input type="button" className="button" id="btShowDB" onClick={this.btShowDB} value="SHOW DATABASE"></input>
        <div className="home-dash"></div>
        <div id="visitor_session"></div>
        <div id="my-static-data"></div>
        <div id="my-perf-data"></div>
    </div>
  );
}
}

const mapStateToProps = (state) =>{
  return {
    trackerData: state.firestore.data.data,
    auth: state.firebase.auth
  };
}


export default compose(
 connect(mapStateToProps),
 firestoreConnect([
   { collection: 'data', doc: Cookies.get('tracker') }
 ])
) (Showdb);
