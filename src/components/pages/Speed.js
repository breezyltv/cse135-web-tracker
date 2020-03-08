import React, { Component } from 'react';
import ZingGrid from "zinggrid";

class Speed extends Component {
  // initialize variables
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
   
    }

  }
componentDidMount() {
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
        <div className="text-home"><h2>Welcome you to Grid !</h2></div>
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
export default Speed;
