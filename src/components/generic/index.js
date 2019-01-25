import React from 'react';
import { TextInput, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import { connect } from 'react-redux';
import { getIcon } from './icon';

import { onChangeInputText } from '../../actions';
import { getInputText } from '../../selectors';

import layout from '../../constants/layout';
import colors from '../../constants/colors';

const onChange = (props, event) => {
  const { onChangeInputText, id } = props;
  console.log('props', props);
  console.log('event', event);
  onChangeInputText(id, event);
}

const InputGen = (props) => {
  const { state, id, placeholder, width, height } = props;
  const value = getInputText(state, id);
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={event => onChange(props, event)}
      style={[
        styles.inputContainer,
        width && { width: `${width}%` },
        height && { height: layout[height] },
      ]}
    />
  );
}

export const ButtonGen = (props) => {
  const { onButtonPress, title, width, height, icon } = props;
  return (
    <TouchableOpacity
      onPress={onButtonPress}
      style={[
        styles.buttonContainer,
        width && { width: `${width}%` },
        height && { height: layout[height] },
      ]}
    >
      {
        (icon && getIcon(icon))
        ||
        <Text style={styles.buttonText}>
          {title}
        </Text>
      }
      
    </TouchableOpacity>
  );
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    onChangeInputText: (id, value) => {
      dispatch(onChangeInputText(id, value))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputGen)

const styles = StyleSheet.create({
  inputContainer: {
    height: layout.elementHeight,
    width: layout.width,
    borderColor: colors.primaryBackground,
    borderWidth: 2,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: layout.elementHeight,
    width: layout.width,
    backgroundColor: colors.primaryBackground,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonText: {
    color: colors.secondaryText,
  },
});