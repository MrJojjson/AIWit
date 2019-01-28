import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import { Container, MessageContainer } from '../components/Wrappers';
import Messages from '../components/Messages';

import InputGen, { ButtonGen } from '../components/generic';

import {
  onChangeInputText,
  saveMessageAndAnswer,
  setErrorMessage,
  setInitialData,
} from '../actions';

import { getInputText, getMessagesText } from '../selectors';

import { getAnswerFromWit, getInitData, setNewUser, getDiscogs, getBooks } from '../apiservices';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentWillMount = () => {
    console.log('ACHTUNG => Home screen mounting');
    const { setInitialData, setErrorMessage } = this.props;
    const user = '1';
    getInitData(user)
      .then((response) => {
        const { text } = response;
        console.log('Message recieved => ', text);
        setInitialData(text)
      }).catch(error => {
        setErrorMessage(error);
      })
  };
  

  onClickButton = () => {
    const { state, onChangeInputText, saveMessageAndAnswer } = this.props;
    const id = 'messageInput';
    const message = getInputText(state, id);
    console.log('Message sent => ', message);
    getBooks(message)
      .then((response) => {
        const { text } = response;
        console.log('Message recieved => ', text);
        saveMessageAndAnswer(text);
      }).then(() => {
        onChangeInputText(id, '');
      })
  }

  render() {
    return (
      <Container vertical='flex-end'>
        <MessageContainer>
          <Messages />
        </MessageContainer>
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
    },
    saveMessageAndAnswer: response => {
      dispatch(saveMessageAndAnswer(response))
    },
    setErrorMessage: error => {
      dispatch(setErrorMessage(error))
    },
    setInitialData: text => {
      dispatch(setInitialData(text))
    },
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
