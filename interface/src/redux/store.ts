import { legacy_createStore as createStore } from 'redux';
import rootReducer from './reducers';

// TODO: Make state persist on refresh, there's some middleware that does this
const store = createStore(rootReducer);

export default store;