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
import NotFoundPage from './components/pages/NotFoundPage';
import Speed from './components/pages/Speed';
import Browers from './components/pages/Browsers';
import Images from './components/pages/Images';
import Table_and_lists from './components/pages/Table_and_lists';
import Form from './components/pages/Form';
import Externals from './components/pages/Externals';
import Showdb from './components/pages/Showdb';
import Signup from './components/pages/Signup';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {},
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    this.authListener();
    window.addEventListener('scroll', this.handleScroll);
    console.log(this.getStaticData())
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(e) {
    console.log('scroll event');
    console.log(e);
  }

  getStaticData(){
    console.log(navigator.userAgent)
    var cookie = navigator.cookieEnabled;

    var checkJSEnabled = navigator.javaEnabled ? "true" : "false";
    
    var con = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    var con_type = con.effectiveType;

    var img_check = document.getElementById('footer') != null ? false : true;

    var checkCSS;

    var avai_height = window.screen.height;
    var avai_width = window.screen.width;

    var window_height = window.innerHeight;
    var window_width = window.innerWidth;

    let static_data = {
        "user_agent": navigator.userAgent,
        "language": navigator.language,
        "cookie": cookie,
        "check_js": checkJSEnabled,
        "image_On": img_check,
        "check_css": checkCSS,
        "connection": con_type,
        "avai_height": avai_height,
        "avai_width": avai_width,
        "window_height": window_height,
        "window_width": window_width
    }
    return static_data;
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
          <Header />

          <Switch>
            <Route exact path="/" component={this.state.user ? Dashboard : Home}  />
            <Route exact path="/dashboard" component={this.state.user ? Dashboard : Login}  />
            <Route exact path="/reports/speed" component={this.state.user ? Speed : Login}  />
            <Route exact path="/reports/browsers"  component={this.state.user ? Browers : Login}  />

            <Route exact path={this.state.user ? "/logout" : "/login" } component={this.state.user ? Logout : Login} />
            <Route exact path="/images" component={Images}  />
            <Route exact path="/form" component={Form}  />
            <Route exact path="/table" component={Table_and_lists}  />
            <Route exact path="/external" component={Externals}  />
            <Route exact path="/showdb" component={Showdb}  />

            <Route exact path="/signup" component={Signup}  />

            <Route component={NotFoundPage} />
        </Switch>
          <Footer />
      </div>

    );
  }
}
export default App;
