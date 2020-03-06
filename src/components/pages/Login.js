import React, { Component } from 'react';
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.email);
    event.preventDefault();
  }

render() {
  return (
    <div class="grid">
        <h1>Login!</h1>
    <br></br>
      <form class="form login" onSubmit={this.handleSubmit}>

        <div class="form__field">
          <label for="login__username"><svg class="icon"></svg><span class="hidden">Username</span></label>
          <input id="login__username" value={this.state.email}  type="text" name="username" class="form__input" placeholder="Username" required></input>
        </div>

        <div class="form__field">
          <label for="login__password"><svg class="icon"></svg><span class="hidden">Password</span></label>
          <input id="login__password" value={this.state.password} type="password" name="password" class="form__input" placeholder="Password" required></input>
        </div>

        <div class="form__field">
          <input id="btSignIn"  type="submit" value="Sign In"></input>
        </div>

      </form>

      <p class="text--center">Not a member? <a href="#">Sign up now</a> <svg class="icon"></svg></p>

    </div>
  );
}
}
export default Login;
