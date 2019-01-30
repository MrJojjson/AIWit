import React from 'react';
import { Provider } from 'react-redux';

import InitScreen from './src/screens/InitScreen';

import configureStore from './src/store';
const store = configureStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store = { store }>
        <InitScreen />
      </Provider>
    )
  }
}
