import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCiMTtfGZtwfy8c_uDseh7m9BxS-H14czg",
  authDomain: "cse135-hw4-eb854.firebaseapp.com",
  databaseURL: "https://cse135-hw4-eb854.firebaseio.com",
  projectId: "cse135-hw4-eb854",
  storageBucket: "cse135-hw4-eb854.appspot.com",
  messagingSenderId: "107125319788",
  appId: "1:107125319788:web:1edaa45cec1f7a73d19049",
  measurementId: "G-EBC3NTN436"
};

const firebaseAuth = firebase.initializeApp(firebaseConfig);
export default firebaseAuth;
