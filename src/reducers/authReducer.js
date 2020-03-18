
const initState = {
    authError: null,
    authSuccess: null,
    isAdminStatus: null
  }

  const authReducer = (state = initState, action) => {
    switch(action.type){
      case 'LOGIN_FAILD':
        console.log('login error');
        return {
          ...state,
          authError: action.err.message
        }

      case 'LOGIN_SUCCESS':
        console.log('login success');
        return {
          ...state,
          authError: null
        }

      case 'UPDATA_ADMIN_SUCCESS':
        console.log('update admin successfully!');
        console.log(action);
        return {
          ...state,
          authSuccess: action.result.data.message
        }
      case 'UPDATA_ROLE_SUCCESS':
        console.log('update ROLE successfully!');
        return {
          ...state,
          authSuccess: null
        }
      case 'UPDATA_ROLE_ERROR':
        console.log('update admin error!');
        return {
          ...state,
          authSuccess: null
        }
      case 'LOGOUT_SUCCESS':
        console.log('logout success');
        return state;

      case 'SIGNUP_SUCCESS':
        console.log('signup success')
        return {
          ...state,
          authError: null
        }

      case 'SIGNUP_ERROR':
        console.log('signup error')
        return {
          ...state,
          authError: action.err.message
        }
        case 'DELETE_SESSION_SUCCESS':
          //console.log('Document successfully deleted!')
          return {
            ...state,
            authSuccess: 'Document successfully deleted!'
          }

        case 'DELETE_SESSION_ERROR':
          console.log('Error removing session!')
          return {
            ...state,
            authError: action.err.message
          }
        case 'DELETE_USER_SUCCESS':
          //console.log('Document successfully deleted!')
          return {
            ...state,
            authSuccess: action.result.data.message
          }

        case 'DELETE_USER_DATA_SUCCESS':
          console.log('User data successfully deleted!')
          return {
            ...state,
            authError: null
          }
        case 'DELETE_USER_DATA_ERROR':
          console.log('Error removing user data!')
          return {
            ...state,
            authError: action.err.message
          }
        case 'IS_ADMIN':
          //console.log('Document successfully deleted!')
          return {
            ...state,
            isAdminStatus: action.idTokenResult.claims.admin
          }
        case 'IS_NOT_ADMIN':
          //console.log('Document successfully deleted!')
          return {
            ...state,
            isAdminStatus: action.idTokenResult.claims.admin
          }
      default:
        return state
    }
  };

  export default authReducer;
