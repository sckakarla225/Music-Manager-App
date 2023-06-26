import { combineReducers } from 'redux';
import userReducer from './user';
import spotifyReducer from './spotify';

const rootReducer = combineReducers({
  user: userReducer,
  spotify: spotifyReducer,
});

export default rootReducer;