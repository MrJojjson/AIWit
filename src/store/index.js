import { createStore, combineReducers } from 'redux';
import reducer from '../reducers';

const rootReducer = combineReducers({
  state: reducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;