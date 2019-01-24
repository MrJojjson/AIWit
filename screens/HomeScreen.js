import React from 'react';
import {
  StyleSheet,
  View,
  Button,
} from 'react-native';

import { Container } from '../components/Wrappers';

import { getAnswerFromWit } from '../apiservices/getters';
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  onClickButton = () => {
    console.log('button clicked');
    getAnswerFromWit()
      .then((response) => {
        console.log('getAnswerFromWit', response.text);
        return response.text;
      })
  }

  render() {
    return (
      <Container>
        <Button title="Click me" onPress={() => this.onClickButton()}></Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
});
