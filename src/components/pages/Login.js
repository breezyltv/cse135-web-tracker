import React, { Component } from 'react';
import firebaseAuth from '../../firebaseconfig';
import { withRouter } from 'react-router';
class Login extends Component {

  constructor(props) {
    super(props);
    this.btSignIn = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
      error: ''
    }


  }

 
  login(event){
    event.preventDefault();
    console.log("login with " +  this.state.email);

    firebaseAuth.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((u)=>{
      this.props.history.push('/dashboard');
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      console.log(errorCode);
      var errorMessage = error.message;
      alert(errorMessage);
      
      // ...
    });
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

render() {
  return (
    <div className="grid">
        <h1>Login!</h1>
    <br></br>
      <div className="form login">

      {/* <div id="alert-box"><span>{this.props.email}</span></div> */}

        <div className="form__field">
          <label htmlFor="login__username"><svg className="icon"></svg><span className="hidden">Username</span></label>
          <input id="login__username" value={this.state.email} onChange={this.handleChange} type="text" name="email" className="form__input" placeholder="email" required></input>
        </div>

        <div className="form__field">
          <label htmlFor="login__password"><svg className="icon"></svg><span className="hidden">Password</span></label>
          <input id="login__password" value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form__input" placeholder="Password" required></input>
        </div>

        <div className="form__field">
          <input id="btSignIn" onClick={this.btSignIn}  type="submit" value="Sign In"></input>
        </div>

      </div>

      <p className="text--center">Not a member? <a href="#">Sign up now</a> <svg className="icon"></svg></p>

    </div>
  );
}
}
export default withRouter(Login);
