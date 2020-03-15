 import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
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
    this.getChartData();
    this.getStaticData();
  }

  getStaticData(){
    const { staticData} = this.props;
    //console.log(staticData)
    // document.getElementById('my-static-data').innerHTML
    // = createTableStaticData(staticData.static_data);
  }

  getChartData(){

    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[
          {
            label:'Population',
            data:[
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]

      }
    });
  }


render() {

  const {auth, userData, staticData} = this.props;

  if(!auth.uid){
    return <Redirect to="/login" />
  }

  var brower_info = {};
  if(staticData){
    brower_info = staticData.static_data;
  }

  var chartData = {};
  var labels = [];
  var data = [];
  if(userData){
    console.log(userData)
    Object.keys(userData).forEach((key) => {

        //labels.push(userData[key].dynamic_data.);
    });
  }

  //console.log(labels)

  return (
    <div id="content-image">
        <div className="text-home"><h2>Browers Information</h2></div>

        <Bar
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Page: ',
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
    userData: state.firestore.ordered[`${props.uid}-dynamic_data`],
    staticData: state.firestore.ordered.users && state.firestore.ordered.users[0]
  };
}


export default compose(
 connect(mapStateToProps),
 firestoreConnect((props) => [
   { collection: 'users', doc: props.auth.uid,
     subcollections: [{ collection: "dynamic_data" }], storeAs: `${props.uid}-dynamic_data` }
 ])
) (Browers);
