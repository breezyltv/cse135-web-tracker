import React, { Component } from 'react';
import firebaseAuth from './firebaseconfig';

import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

// React Router Import
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {createDataNoUser, updateData} from './actions/trackerAction'
import {reactLocalStorage} from 'reactjs-localstorage';
import Cookies from 'js-cookie';
import browserHistory from './history';

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
import Account from './components/pages/Account';
import {getStaticData, getPerformanceData} from './tracker';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {},
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.beforeunload = this.beforeunload.bind(this);
  }

  componentDidMount(){
    console.log('tracker is: ' + Cookies.get('tracker'))

    this.authListener();


    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('beforeunload', this.beforeunload);



    if(!Cookies.get('tracker')){
      this.props.createDataNoUser(getStaticData());
    }else{
      let performance = reactLocalStorage.getObject('performance');

      console.log(performance);

      if(performance){
        const { auth } = this.props
        var id;
        var logged;
        if(auth.uid){
          id = auth.uid;
          logged = true;
        }else{
          id = Cookies.get('tracker');
          logged = false;
        }

        console.log('id to update: ' + id +" Login Status: " + logged);

        this.props.updateData(
          id,
          performance['page_name'],
          performance['static_data'],
          performance['performance_data'],
          logged
        );
      }
    }

  }

  componentWillUnmount() {

    window.removeEventListener('beforeunload', this.beforeunload);
    window.removeEventListener('scroll', this.handleScroll);

  }

  beforeunload(e) {

    console.log('Saving data before changing route....')
    var page_name = browserHistory.location.pathname.replace(/^\/|\/$/g, '');
    let performance = {
      page_name: page_name,
      static_data: getStaticData(),
      performance_data: getPerformanceData(),
    }
    reactLocalStorage.setObject('performance', performance);

  }


  handleScroll(e) {
    console.log('scroll event');
    //console.log(e);
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
            <Route exact path="/account" component={this.state.user ? Account : Login}  />
            <Route exact path="/signup" component={Signup}  />

            <Route component={NotFoundPage} />
        </Switch>
          <Footer />
      </div>

    );
  }
}

const mapStateToProps = (state) =>{
  return {
    auth: state.firebase.auth
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    createDataNoUser: (data) => dispatch(createDataNoUser(data)),
    updateData: (id, page_name, static_data, performance_data, logged) => dispatch(
      updateData(id, page_name, static_data, performance_data, logged)
    )
  }
}


export default connect(mapStateToProps ,mapDispatchToProps)(App);
