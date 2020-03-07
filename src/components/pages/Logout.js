import React, { Component } from 'react';
import firebaseAuth from '../../firebaseconfig';
import { withRouter } from 'react-router';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.btSignOut = this.logout.bind(this);

    if (props.user) {
      alert("You can't login if you are logged in!")
      //props.history.push('/ticket-list')
    }
  }

  logout(){
    this.props.history.push('/login');
    firebaseAuth.auth().signOut();
  }


render () {


  return (
    <div className="grid">
        <h1>Please click the button to Sign out!</h1>
    <br></br>
      <div className="form login">

        <div className="form__field">
          <input onClick={this.btSignOut} type="submit" value="Sign Out"></input>
        </div>

      </div>

    </div>
  );
}
}
export default withRouter(Logout);
