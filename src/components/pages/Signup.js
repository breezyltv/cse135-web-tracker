import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import {signUp} from '../../actions/authActions'

class Signup extends Component {


  constructor(props) {

    super(props);
    this.btSignUp = this.signUp.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      emailErr: "",
      password: '',
      passwordErr: "",
      repeat_password: '',
      repeat_password_err: '',
      firstname:'',
      firstErr: "",
      lastname:'',
      lastErr: ""
    }

  }

  signUp(event){
    event.preventDefault();

    const err = this.validateForm();
    if(!err){
      this.setState({
        email: '',
        emailErr: "",
        password: '',
        passwordErr: "",
        repeat_password: '',
        repeat_password_err: '',
        firstname:'',
        firstErr: "",
        lastname:'',
        lastErr: ""
      })

      //send userData to signup actions
      console.log("Sign up with " + this.state);
      this.props.signUp(this.state);
    }

  }

  validateForm = () =>{
    let isError = false;
    const errors = {};
    if(this.state.firstname.length === 0){
      isError = true;
      errors.firstErr = "Username cannot be blank!";
    }
    if(this.state.lastname.length === 0){
      isError = true;
      errors.lastErr = "Lastname cannot be blank!";
    }
    if(this.state.email.indexOf("@") === -1){
      isError = true;
      errors.emailErr = "Requires valid email!";
    }
    if(this.state.password.length < 5){
      isError = true;
      errors.passwordErr = "Password needs to be at least 5 characters long";
    }

    if(this.state.password !== this.state.repeat_password){
      isError = true;
      errors.repeat_password_err = "Password doesn't match!";
    }
      console.log(errors)

      //set erros to state
    this.setState(errors)

    return isError;
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

render() {

  const {auth, authError} = this.props;

  if(auth.uid){
    return <Redirect to="/logout" />
  }

  return (
    <div className="grid">
        <h1>Sign Up!</h1>
    <br></br>
      <div className="form login">

        { authError ? <div id="alert-box"><span>{authError}</span></div> : null}

        <div className="form__field">
          <label htmlFor="login__username"><span>Email:</span></label>
          <input id="login__username" value={this.state.email} onChange={this.handleChange} type="text" name="email" className="form__input" placeholder="email" required></input>
        </div>
        <span className="alert-text">{this.state.emailErr}</span>

        <div className="form__field">
          <label htmlFor="login__firstname"><span>Firstname:</span></label>
          <input id="login__firstname" value={this.state.firstname} onChange={this.handleChange} type="text" name="firstname" className="form__input" placeholder="First Name" required></input>
        </div>
        <span className="alert-text">{this.state.firstErr}</span>

        <div className="form__field">
          <label htmlFor="login__lastname"><span>Lastname:</span></label>
          <input id="login__lastname" value={this.state.lastname} onChange={this.handleChange} type="text" name="lastname" className="form__input" placeholder="Last Name" required></input>
        </div>
        <span className="alert-text">{this.state.lastErr}</span>

        <div className="form__field">
          <label htmlFor="login__password"><span>Password:</span></label>
          <input id="login__password" value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form__input" placeholder="Password" required></input>
        </div>
        <span className="alert-text">{this.state.passwordErr}</span>

        <div className="form__field">
          <label htmlFor="login__repeat"><span>Repeat Password:</span></label>
          <input id="login__repeat" value={this.state.repeat_password} onChange={this.handleChange} type="password" name="repeat_password" className="form__input" placeholder="Repeat Password" required></input>
        </div>
        <span className="alert-text">{this.state.repeat_password_err}</span>

        <div className="form__field">
          <input id="btSignUp" onClick={this.btSignUp}  type="submit" value="Sign Up"></input>
        </div>

      </div>

    </div>
  );
}
}

const mapStateToProps = (state) =>{
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
