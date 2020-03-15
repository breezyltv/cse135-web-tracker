const initState = {}

const trackerReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_DATA_SUCCESS':
      console.log('create project success');
      return state;
    case 'UPDATE_DATA_SUCCESS':
      console.log('update data success');
      return state;
    case 'CREATE_DATA_ERROR':
      console.log('create project error');
      return state;
    case 'UPDATE_DATA_ERROR':
      console.log('update project error');
      return state;
    case 'UPDATE_DYNAMIC_DATA_SUCCESS':
      console.log('update dynamic data success');
      return state;
      case 'UPDATE_DYNAMIC_DATA_ERROR':
        console.log('update dynamic data error');
        return state;
    default:
      return state;
  }
};

export default trackerReducer;
