import { combineReducers } from 'redux';
import userReducer from './user';

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here
});

export default rootReducer;