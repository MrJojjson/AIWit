import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

import AppNavigator from '../navigation/AppNavigator';

import {
  setLoadingState,
  setInitialData,
  setErrorMessage,
} from '../actions';

import { getInitData} from '../apiservices';
import RegistrationScreen from './RegistrationScreen';

class InitScreen extends React.Component {
  componentWillMount(){
    const { setLoadingState, setInitialData, setErrorMessage } = this.props;
    console.log('ACHTUNG => INIT DATA FETCHING!');
    const user = '1';
    getInitData(user)
      .then((response) => {
        const { text } = response;
        setInitialData(text)
      })
      .then(() => {
        setLoadingState(false);
      })
      .catch(error => {
        setErrorMessage(error);
      })
  }

  render() {
    const { state } = this.props;
    if (state.loading) {
      return (
        <Text>LOADING!!!</Text>
      );
    }
    if (state.loggedIn) {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
    return <RegistrationScreen />
  }
}


const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    setInitialData: text => {
      dispatch(setInitialData(text))
    },
    setLoadingState: loadingState => {
      dispatch(setLoadingState(loadingState))
    },
    setErrorMessage: error => {
      dispatch(setErrorMessage(error))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InitScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
