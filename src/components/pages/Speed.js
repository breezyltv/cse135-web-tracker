import React, { Component } from 'react';
import ZingGrid from "zinggrid";
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';

class Speed extends Component {
  // initialize variables
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],

    }

  }
componentDidMount() {
  const {auth, userData} = this.props;

  // set state and reflect that change through attribute mutation
  this.setState(() => {
    return {
      "dogs": [
        {
          "breed": "Dachshund",
          "name": "Sousage"
        },
        {
          "breed": "Corgi",
          "name": "Plop"
        },
        {
          "breed": "Pomeranian",
          "name": "Floof"
        },
        { "breed": "Pomeranian", "name": "Koda"},
        { "breed": "Cane Corso", "name": "Ziva"},
        { "breed": "Dachshund", "name": "Rick"}
      ]
    }
  });

}


render() {
  return (
    <div id="content-image">
        <div className="text-home"><h2>Performance Information !</h2></div>
        <zing-grid id="helloWorld"
        sort
        search
        pager
        page-size="5"
        page-size-options="2,5,15"
        caption="Hello Doggos" data={JSON.stringify(this.state.dogs)} loading></zing-grid>

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
