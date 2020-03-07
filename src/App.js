import React, { Component } from 'react';
import firebaseAuth from './firebaseconfig';

import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

// React Router Import
import { Switch, Route } from 'react-router-dom';

// Import Pages
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Logout from './components/pages/Logout';
import Dashboard from './components/pages/Dashboard';
import HeaderForLogin from './components/layouts/HeaderForLogin';
import NotFoundPage from './components/pages/NotFoundPage';
import Speed from './components/pages/Speed';
import Browers from './components/pages/Browsers';
import Images from './components/pages/Images';
import Table_and_lists from './components/pages/Table_and_lists';
import Form from './components/pages/Form';
import Externals from './components/pages/Externals';
import Showdb from './components/pages/Showdb';

import {UserContext} from './UserContext';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {},
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){

    firebaseAuth.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user});
        //this.props.history.push("/dashboard");
        console.log("user status: logged");
      }else{
        this.setState({user: null});
        //this.props.history.push("/login");
        console.log("user status: log out");
      }
    });
  }

  render() {

    return (
      <div>
        <UserContext.Provider value={this.state}>
          {this.state.user ? (<HeaderForLogin />) : (<Header />)}

          <Switch>
            <Route exact path="/" component={this.state.user ? Dashboard : Home}  />
            <Route exact path="/dashboard" component={this.state.user ? Dashboard : Login}  />
            <Route exact path="/reports/speed" component={this.state.user ? Speed : Login}  />
            <Route exact path="/reports/browsers" component={this.state.user ? Browers : Login}  />

            <Route exact path={this.state.user ? "/logout" : "/login" } component={this.state.user ? Logout : Login} />
            <Route exact path="/images" component={Images}  />
            <Route exact path="/form" component={Form}  />
            <Route exact path="/table" component={Table_and_lists}  />
            <Route exact path="/external" component={Externals}  />
            <Route exact path="/showdb" component={Showdb}  />
            <Route component={NotFoundPage} />
        </Switch>
          <Footer />

        </UserContext.Provider>
      </div>

    );
  }
}
export default App;
