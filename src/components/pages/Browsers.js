 import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import {createTableStaticData} from '../../tracker';

class Browers extends Component {

  constructor(props){
    super(props);
    this.state = {
      chartData:{},
      location: "Massachusetts",

    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  componentDidMount(){

  }

  getChartData(lables_data, count_data){
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


render() {

  const {auth, userData} = this.props;

  if(!auth.uid){
    return <Redirect to="/login" />
  }


  var labels = [];
  var data = [];

  var brower_info = {};
  if(userData){
    brower_info = userData.static_data;

    Object.keys(userData.dynamic_data).forEach((key) => {
        labels.push(key.toUpperCase());
        data.push(userData.dynamic_data[key])
    });

  }




  return (
    <div id="content-image">
        <div className="text-home"><h2>Browers Information</h2></div>

        <Bar
          data={this.getChartData(labels, data)}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Counts Information ',
              fontSize:25,
              fontColor: '#333'
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />

      <div dangerouslySetInnerHTML={{__html: createTableStaticData(brower_info)}} />


    </div>
  );
}
}
const mapStateToProps = (state, props) =>{
  //console.log(state)
  return {
    auth: state.firebase.auth,
    userData: state.firestore.ordered.users && state.firestore.ordered.users[0],

  };
}


export default compose(
 connect(mapStateToProps),
 firestoreConnect((props) => [
   { collection: 'users', doc: props.auth.uid }
 ])
) (Browers);
