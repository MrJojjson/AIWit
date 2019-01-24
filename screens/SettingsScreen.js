import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Container } from '../components/Wrappers';
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    return (
      <Container>
        <Text>SettingScreen</Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});