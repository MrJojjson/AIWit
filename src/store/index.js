import { createStore, combineReducers, compose } from 'redux';
import reducer from '../reducers';

const rootReducer = combineReducers({
  state: reducer
});

const configureStore = () => {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

export default configureStore;

// import { compose, createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

// import reducers from '../reducers';

// const middleware = [thunk];
// // eslint-disable-next-line no-underscore-dangle
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default createStore(reducers, composeEnhancers(applyMiddleware(...middleware)));