import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../components/Wrappers';
import InputGen, { ButtonGen } from '../components/generic';

import { onChangeInputText } from '../actions';
import { getInputText } from '../selectors';

import { getAnswerFromWit } from '../apiservices';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  onClickButton = () => {
    console.log('Message sent!');
    const { state, onChangeInputText } = this.props;
    const id = 'messageInput';
    const message = getInputText(state, id);
    getAnswerFromWit(message)
      .then((response) => {
        console.log('Message recieved => ', response.text);
        return response.text;
      }).then(() => {
        onChangeInputText(id, '');
      })
  }

  render() {
    return (
      <Container vertical='flex-end'>
        <View style={styles.inputButtonContainer}>
          <InputGen
            id="messageInput"
            placeholder="Start typing..."
            width='80'
            height='elementHeight'
          />
          <ButtonGen
            title="Send message"
            id="messageButton"
            onButtonPress={this.onClickButton}
            width='20'
            height='elementHeight'
            icon='send'
          />
        </View>
        
      </Container>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    onChangeInputText: (id, value) => {
      dispatch(onChangeInputText(id, value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

const styles = StyleSheet.create({
  inputButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
