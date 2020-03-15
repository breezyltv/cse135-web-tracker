import React, { Component } from 'react';
// import ZingGrid from "zinggrid";
import { Redirect } from 'react-router-dom';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';

class Speed extends Component {
  // initialize variables
  constructor(props) {
    super(props);


  }

componentDidMount() {


}


render() {

  const {auth, userData} = this.props;

  if(!auth.uid){
    return <Redirect to="/login" />
  }

  if(userData){
    var email = userData.user_info.email;
    //console.log(userData)
    var performance_data = {};
    Object.keys(userData).forEach((key) => {
        if(key !== "static_data" && key !== 'user_info' && key !== 'id' && key !== "dynamic_data"){
            performance_data[key] = userData[key];
        }
    });

    console.log(performance_data);
  }

  return (
    <div id="content-image">
        <div className="text-home"><h2>Performance Information !</h2></div>
        <zing-grid id="helloWorld"
        sort
        search
        pager
        page-size="5"
        page-size-options="2,5,15"
        caption={'Data from: ' + email} data={JSON.stringify(performance_data)} loading></zing-grid>

    </div>
  );
}
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
) (Speed);
