import React, { Component } from 'react';
import { connect } from 'react-redux';
import {logout} from '../../actions/authActions';

class Logout extends Component {
  constructor(props) {
    super(props);

    this.btSignOut = this.btLogout.bind(this);
  }

  btLogout(){
    this.props.logout();
  }

  render () {

  const { authError } = this.props;

  return (
    <div className="grid">
        <h1>Please click the button to Sign out!</h1>
    <br></br>
      <div className="form login">
        
        { authError ? <div id="alert-box"><span>{authError}</span></div> : null}

        <div className="form__field">
          <input onClick={this.btSignOut} type="submit" value="Sign Out"></input>
        </div>

      </div>

    </div>
  );
}
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    logout:() => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
