import { combineReducers } from 'redux';
// import system from './systemReducer';
// import isFetching from './fetchingReducer';
// import warning from './warningReducer';
import metaMask from './metaMaskReducer';

const appReducer = combineReducers({
  // system,
  // isFetching,
  // warning,
  metaMask
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;
