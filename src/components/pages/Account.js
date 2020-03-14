import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
class Account extends Component {

  constructor(props) {

    super(props);
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
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
render() {

  const {auth, userData} = this.props;

  if(!auth.uid){
    return <Redirect to="/login" />
  }

  var lastname;
  var firstname;
  var email;
  var role;
  if(userData){
    firstname = userData.user_info.firstname;
    lastname = userData.user_info.lastname;
    email = userData.user_info.email;
    role = userData.user_info.role;
  }

  return (
    <div id="content-image">
    <div className="grid">
        <h1>profile</h1>
    <br></br>
      <div className="form login user-info">
        <div className="form__field">
          <label htmlFor="login__username"><span>Email:</span></label>
          <input id="login__username" value={email}
          type="text" name="email" className="form__input" placeholder="email" disabled="disabled"></input>
        </div>
        <span className="alert-text">{this.state.emailErr}</span>

        <div className="form__field">
          <label htmlFor="login__firstname"><span>Firstname:</span></label>
          <input id="login__firstname" value={firstname} onChange={this.handleChange}
          type="text" name="firstname" className="form__input" placeholder="First Name" disabled="disabled"></input>
        </div>
        <span className="alert-text">{this.state.firstErr}</span>

        <div className="form__field">
          <label htmlFor="login__lastname"><span>Lastname:</span></label>
          <input id="login__lastname" value={lastname} onChange={this.handleChange}
          type="text" name="lastname" className="form__input" placeholder="Last Name" disabled="disabled"></input>
        </div>
        <span className="alert-text">{this.state.lastErr}</span>

        <div className="form__field">
          <label htmlFor="login__role"><span>Role:</span></label>
          <input id="login__password" value={role}
          type="text" name="password" className="form__input" disabled="disabled"></input>
        </div>


      </div>

    </div>
    </div>
  );
}
}
const mapStateToProps = (state) =>{
  console.log(state)

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
) (Account);
