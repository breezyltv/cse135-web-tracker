import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';

class Login extends Component {

  constructor(props) {
    super(props);
    this.btSignIn = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
    }

  }

  login(event){
    event.preventDefault();
    console.log("login with " +  this.state.email);
    //dispatch email and password
    this.props.login(this.state);

  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

render() {

  const {authError} = this.props;


  return (
    <div className="grid">
        <h1>Login!</h1>
    <br></br>
      <div className="form login">

        { authError ? <div id="alert-box"><span>{authError}</span></div> : null}

        <div className="form__field">
          <label htmlFor="login__username"><i className="fas fa-user"></i><span className="hidden">Username</span></label>
          <input id="login__username" value={this.state.email} onChange={this.handleChange} type="text" name="email" className="form__input" placeholder="email" required></input>
        </div>

        <div className="form__field">
          <label htmlFor="login__password"><i className="fas fa-lock"></i><span className="hidden">Password</span></label>
          <input id="login__password" value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form__input" placeholder="Password" required></input>
        </div>

        <div className="form__field">
          <input id="btSignIn" onClick={this.btSignIn}  type="submit" value="Sign In"></input>
        </div>

      </div>
      <p className="text--center">Not a member? <a href="/signup">Sign up now</a> <svg className="icon"></svg></p>

    </div>
  );
}
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (creds) => dispatch(login(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
