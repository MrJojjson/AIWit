import React from 'react';
import { TextInput, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import { connect } from 'react-redux';

import { Icon } from 'expo';

import { onChangeInputText } from '../../actions';
import { getInputText } from '../../selectors';

import layout from '../../constants/layout';
import colors from '../../constants/colors';

const onChange = (props, event) => {
  const { onChangeInputText, id } = props
  onChangeInputText(id, event);
}

const InputGen = (props) => {
  const { state, id, placeholder, width, heightMultiplier } = props;
  const value = getInputText(state, id);
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={event => onChange(props, event)}
      style={[
        styles.inputContainer,
        width && { width: `${width}%` },
        heightMultiplier && { height: layout.elementHeight * heightMultiplier },
      ]}
    />
  );
}

export const TextGen = (props) => {
  const { title, lines, align, border, fromButton } = props;
  return (
    <Text
      style={[
        styles.text,
        align && { textAlign: align },
        !border && fromButton && { color: colors.secondaryText },
        border && { color: colors.primaryBackground },
      ]}
      numberOfLines={lines || null}
    >
      {title}
    </Text>
  );
}

export const IconGen = (props) => {
  const { icon, sizeMultiplier, border } = props;
  return (
    <Icon.Ionicons
      size={layout.icon * (sizeMultiplier || 1)}
      color={border ? colors.primaryBackground : colors.secondaryText}
      name={
        Platform.OS === 'ios'
          ? `ios-${icon}`
          : `md-${icon}`
      }
    />
  )
}

export const ButtonGen = (props) => {
  const { onButtonPress, title, width, heightMultiplier, icon, border, secondary } = props;
  const fromButton = true;
  return (
    <TouchableOpacity
      onPress={onButtonPress}
      style={[
        styles.buttonContainer,
        width && { width: `${width}%` },
        heightMultiplier && { height: layout.elementHeight * heightMultiplier },
        border && { backgroundColor: '' },
        border && border === 'none' && { border: 'none' },
        border && border === 'full' && { borderColor: colors.primaryBackground, borderWidth: 1 },
      ]}
    >
      {
        (icon && IconGen({icon, border}))
        ||
        TextGen({title, border, fromButton})
      }
      
    </TouchableOpacity>
  );
}

export const BubbleGen = (props) => {
  const { title, secondary, left } = props;
  return (
    <View 
      style={[
        styles.bubble,
        secondary && { backgroundColor: colors.secondaryBackground },
        {alignSelf: left ? 'flex-start' : 'flex-end'},
      ]}
    >
      <Text style={styles.bubbleText}>
        {title}
      </Text>
    </View>
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
    borderBottomColor: colors.primaryBackground,
    borderBottomWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 10
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: layout.elementHeight,
    width: layout.width,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: colors.primaryBackground,
  },
  text: {
    fontSize: layout.text,
    color: colors.primaryText,
  },
  bubble: {
    backgroundColor: colors.primaryBackground,
    paddingLeft: layout.padding,
    paddingRight: layout.padding,
    paddingTop: layout.padding / 2,
    paddingBottom: layout.padding / 2,
    borderRadius: layout.padding / 2,
    marginTop: layout.padding / 2,
    maxWidth: layout.width / 1.4,
  },
  bubbleText: {
    color: colors.secondaryText,
  },
});