import React, { Component } from 'react';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

// React Router Import
import { Switch, Route } from 'react-router-dom';
// Import Pages
import Home from './components/pages/Home';
import Login from './components/pages/Login';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </switch>
        <Footer />
      </div>

    );
  }
}
export default App;
