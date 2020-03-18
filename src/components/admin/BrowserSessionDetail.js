import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { isAdmin } from '../../actions/authActions';
import {createTableStaticData} from '../../tracker';

 function getChartData(lables_data, count_data){
   // Ajax calls here
   var chartData = {
       labels: lables_data,
       datasets:[
         {
           label:'Counts',
           data:count_data,
           backgroundColor:[
             'rgba(255, 99, 132, 0.6)',
             'rgba(54, 162, 235, 0.6)',
             'rgba(255, 206, 86, 0.6)',
             'rgba(75, 192, 192, 0.6)',
             'rgba(153, 102, 255, 0.6)',
           ]
         }
       ]
     }
   return chartData;
 }


function BrowserSessionDetail(props) {

 const {auth, sessionData, isAdminStatus} = props;

 if(!auth.uid){
   return <Redirect to="/login" />
 }else {
   //check that the user is admin
   props.isAdmin();
  if(!isAdminStatus){
    return <Redirect to="/reports/browsers" />
  }else{

     var labels = [];
     var data = [];

     var brower_info = {};
     var username;
     if(sessionData){
       brower_info = sessionData.static_data;
       username = props.match.params.id;
       if(sessionData.dynamic_data != null){
         Object.keys(sessionData.dynamic_data).forEach((key) => {
             labels.push(key.toUpperCase());
             data.push(sessionData.dynamic_data[key])
         });
       }else{
         username = 'Data not found!';
       }
    }
  }
 }

 return (
   <div id="content-image">
       <div className="text-home"><h2>Session Information</h2></div>
       <Bar
         data={getChartData(labels, data)}
         options={{
           title:{
             display:true,
             text:'Counts Information from: ' + username,
             fontSize:25,
             fontColor: '#333'
           },
           legend:{
             display: true,
             position: 'right'
           }
         }}
       />

     <div dangerouslySetInnerHTML={{__html: createTableStaticData(brower_info)}} />


   </div>
 );
}

const mapStateToProps = (state, ownProps) =>{
  const id = ownProps.match.params.id;
  const data = state.firestore.data.data;
  const session_data = data ? data[id] : null;
 return {
   auth: state.firebase.auth,
   sessionData: session_data,
   isAdminStatus: state.auth.isAdminStatus
 };
}
const mapDispatchToProps = (dispatch) => {
  return {
    isAdmin:() => dispatch(isAdmin()),
  }
}

export default compose(
connect(mapStateToProps, mapDispatchToProps),
firestoreConnect((props) => [
  { collection: 'data', doc: props.match.params.id }
])
) (BrowserSessionDetail);
