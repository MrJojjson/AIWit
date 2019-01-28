import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'expo';
import { connect } from 'react-redux';

import { getMessagesText } from '../selectors';

import { BubbleGen } from './generic';

import Colors from '../constants/colors';

class AnswersFromWit extends React.Component {

  renderMessages(){
    const { state } = this.props;
    const messages = getMessagesText(state);
    return messages.map((message, i) => (
      <View
        key={message.id}
      >
        <BubbleGen title={message.text} />
        <BubbleGen title={message.id} left secondary/>
      </View>
    ))
  }
  
  render() {
    return (
      this.renderMessages()
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(AnswersFromWit)

const styles = StyleSheet.create({
});
