import React, { Component } from 'react';
import firebaseAuth from '../../firebaseconfig';
import { withRouter } from 'react-router';

class Logout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogout: '',
    }

    this.btSignOut = this.logout.bind(this);

  
  }

  logout(){

    firebaseAuth.auth().signOut().then((u) => {
      // Sign-out successful.
      this.props.history.push('/login');
    }).catch(function(error) {
      // An error happened.
      console.log(error);    
    });
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
