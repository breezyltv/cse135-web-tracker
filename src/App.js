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
import Manager from './components/pages/Manager';

import {getStaticData, getPerformanceData} from './tracker';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {},
      click: 0,
      mouseover: 0,
      keydown: 0,
      scroll: 0,
      beforeunload: 0
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.beforeunload = this.beforeunload.bind(this);
    this.click = this.click.bind(this);
    this.mouseover = this.mouseover.bind(this);

  }

  componentDidMount(){
    console.log('tracker is: ' + Cookies.get('tracker'))

    this.authListener();

    // addEventListener
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('beforeunload', this.beforeunload);
    window.addEventListener('click', this.click);
    window.addEventListener('mouseover', this.mouseover);


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

        //set dynamic data to state

        var dynamic_data = reactLocalStorage.getObject('dynamic_data');

        //console.log(dynamic_data)
        if(dynamic_data){
          this.setState({mouseover: dynamic_data.mouseover})
          this.setState({click: dynamic_data.click})
          this.setState({scroll: dynamic_data.scroll})
          this.setState({keydown: dynamic_data.keydown})
          this.setState({beforeunload: dynamic_data.beforeunload})
        }else {
          dynamic_data = {
            click: this.state.click,
            mouseover: this.state.mouseover,
            keydown: this.state.keydown,
            scroll: this.state.scroll,
            beforeunload: this.state.beforeunload
          };
        }

        //Call to uodate
        // this.props.updateData(
        //   id,
        //   performance['page_name'],
        //   performance['static_data'],
        //   performance['performance_data'],
        //   dynamic_data,
        //   logged
        // );
      }
    }

  }
  componentWillMount() {
       document.addEventListener("keydown", this.onKeyPressed.bind(this));
   }

  componentWillUnmount() {

    window.removeEventListener('beforeunload', this.beforeunload);
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('click', this.click);
    window.removeEventListener('mouseover', this.mouseover);
    window.removeEventListener('keydown', this.onKeyPressed);

  }

  mouseover(e){
    this.setState({mouseover: this.state.mouseover+1});

  }

  onKeyPressed(e){
    this.setState({keydown: this.state.keydown+1});
  }

  click(e){
    this.setState({click: this.state.click+1});
  }

  beforeunload(e) {
    this.setState({beforeunload: this.state.beforeunload+1});

    console.log('Saving data before changing route....')
    var page_name = browserHistory.location.pathname.replace(/^\/|\/$/g, '');
    const { auth } = this.props
    if(page_name === ""){
      if(auth.uid){
          page_name = 'dashboard';
      }else{
          page_name = 'index';
      }
    }
    let performance = {
      page_name: page_name,
      static_data: getStaticData(),
      performance_data: getPerformanceData(page_name),
    }

    reactLocalStorage.setObject('performance', performance);

    var dynamic_data = {
      click: this.state.click,
      mouseover: this.state.mouseover,
      keydown: this.state.keydown,
      scroll: this.state.scroll,
      beforeunload: this.state.beforeunload
    };

    reactLocalStorage.setObject('dynamic_data', dynamic_data);

  }


  handleScroll(e) {
    this.setState({scroll: this.state.scroll+1});
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
            <Route exact path="/account" component={Account}  />
            <Route exact path="/manager" component={Manager}  />
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
    updateData: (id, page_name, static_data, performance_data, dynamic_data, logged) => dispatch(
      updateData(id, page_name, static_data, performance_data, dynamic_data, logged)
    )
  }
}


export default connect(mapStateToProps ,mapDispatchToProps)(App);
