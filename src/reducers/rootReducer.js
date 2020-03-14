import authReducer from './authReducer'
import trakerReducer from './trackerReducer'
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
  auth: authReducer,
  tracker: trakerReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer
