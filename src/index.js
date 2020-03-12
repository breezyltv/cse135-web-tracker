import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Router } from "react-router-dom";
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import firebaseconfig from './firebaseconfig';

import browserHistory from './history'

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(firebaseconfig, {attachAuthIsReady: true}),
    reduxFirestore(firebaseconfig)
  )
);

//waiting for auth being ready
store.firebaseAuthIsReady.then(()=>{
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <App />
      </Router>
    </Provider>,
    document.getElementById('page')
  );
});



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
