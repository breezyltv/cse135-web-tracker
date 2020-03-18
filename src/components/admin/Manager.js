import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import browserHistory from '../../history';
import Cookies from 'js-cookie';
import Popup from "reactjs-popup";
import { addAdminRole, deleteSession, isAdmin, deleteUser } from '../../actions/authActions';
import firebaseAuth from '../../firebaseconfig';

class Manager extends Component {
  constructor(props) {
    super(props);
    //this.btMakeAdmin = this.btMakeAdmin.bind(this);

  }

makeAdmin(email, id){
  //console.log(email + " " + id)
  this.props.addAdminRole(email, id);
}

deleteSession(id){
  this.props.deleteSession(id);
}

render() {
  const { auth, userData, sessionData, authSuccess, authError } = this.props;

  if(!auth.uid){
    return <Redirect to="/login" />
  }else {
    //check that the user is admin
    var isAdminStatus = this.props.adminRole;
    //console.log("adminRole: " + isAdminStatus)
    if(isAdminStatus !== null){
      if(!isAdminStatus){
        return <Redirect to="/dashboard" />
      }
    }

  }

  return (
    <div id="content-image">
      <h1>Management Dashboard</h1>

      { authSuccess  ? <div id="alert-success-box"><span>{authSuccess}</span></div> : null}
      { authError  ? <div id="alert-box"><span>{authError}</span></div> : null}
      <table>
              <caption>Users Management</caption>
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              { userData && userData.map(key => {
                return(
                  <tr key={key.id}>
                    <th>{key.user_info.email}</th>
                    <td>{key.user_info.role.toUpperCase()}</td>
                    <td>
                    {(auth.uid !== key.id) ? (
                        <Popup
                            trigger={<button className="button">
                            {(key.user_info.role !== 'admin') ? (<i className="fas fa-user-edit"></i>) :
                            (<i className="fas fa-info-circle"></i>)}
                            </button>}
                            modal>
                            {close => (
                               <div className="modal">
                                 <a className="close" onClick={close}>
                                   &times;
                                 </a>
                                 <div className="header"> ID: {key.id} </div>

                                 <div className="content">
                                   <span>Firstname: {key.user_info.firstname.toUpperCase()}</span><br/>
                                   <span>Lastname: {key.user_info.lastname.toUpperCase()}</span>
                                 </div>
                                 <div className="actions">

                                 {(key.user_info.role !== 'admin') ? (
                                 <button className="button" id="btMakeAdmin"
                                 onClick={() => {
                                   this.makeAdmin(key.user_info.email, key.id);
                                   close();
                                   }} >
                                   Make Admin
                                 </button>) : null}


                                   <button
                                     className="button"
                                     onClick={() => {
                                       console.log("modal closed ");
                                       close();
                                     }}
                                   >
                                     Cancel
                                   </button>
                                 </div>
                               </div>
                             )}
                        </Popup>) : 'You'}

                        {(key.user_info.role !== 'admin') ? (

                          <Popup
                            trigger={<button className="button btDelete"> <i className="fas fa-trash-alt"></i> </button>}
                            modal>
                            {close => (

                              <div className="modal">
                                <a className="close" onClick={close}>
                                  &times;
                                </a>
                                <div className="header"> User: {key.user_info.email} </div>
                                <div className="content">
                                  <span>Are you sure to delete this user?</span>
                                  <span>Firstname: {key.user_info.firstname.toUpperCase()}</span><br/>
                                  <span>Lastname: {key.user_info.lastname.toUpperCase()}</span>
                                </div>
                                <div className="actions">

                                <button className="button" id="btDeleteSession" onClick={() => {
                                  this.props.deleteUser(key.id);
                                  close();
                                }} >
                                  Delete
                                </button>

                                  <button
                                    className="button"
                                    onClick={() => {
                                      console.log("modal closed ");
                                      close();
                                    }}
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            )}
                         </Popup>

                      ): null}
                    </td>
                  </tr>
                )
              })}
              </tbody>
            </table>

            <div className="home-dash"></div>
            <table>
              <caption>Vistors Management</caption>
              <thead>
                <tr>
                  <th>Session ID</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              { sessionData && sessionData.map(key => {
                return(
                  <tr key={key.id}>
                    <th>{key.id}</th>
                    <td>
                    { (key.id !== Cookies.get('tracker')) ? (

                      <Popup
                        trigger={<button className="button"> <i className="fas fa-trash-alt"></i> </button>}
                        modal>
                        {close => (

                          <div className="modal">
                            <a className="close" onClick={close}>
                              &times;
                            </a>
                            <div className="header"> session: {key.id} </div>
                            <div className="content">
                              <span>Are you sure to delete this session?</span>
                            </div>
                            <div className="actions">

                            <button className="button" id="btDeleteSession" onClick={() => {
                              this.deleteSession(key.id);
                              close();
                            }} >
                              Delete
                            </button>

                              <button
                                className="button"
                                onClick={() => {
                                  console.log("modal closed ");
                                  close();
                                }}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        )}
                     </Popup>

                      ) : 'Your current Session.'
                    }
                    </td>
                  </tr>
                )
              })}
              </tbody>
            </table>
    </div>
  );
}
}
const mapStateToProps = (state, props) =>{
  //console.log(state)
  return {
    auth: state.firebase.auth,
    userData: state.firestore.ordered.users,
    sessionData: state.firestore.ordered.data,
    authError: state.auth.authError,
    authSuccess: state.auth.authSuccess,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addAdminRole: (email, id) => dispatch(addAdminRole(email, id)),
    deleteSession: (id) => dispatch(deleteSession(id)),
    deleteUser: (email) => dispatch(deleteUser(email))
  }
}

export default compose(
 connect(mapStateToProps, mapDispatchToProps),
 firestoreConnect((props) => [
   { collection: 'users' },
   { collection: 'data'}
 ])
) (Manager);
