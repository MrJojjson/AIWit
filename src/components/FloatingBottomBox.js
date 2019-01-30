import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { BubbleGen } from './generic';

import layout from '../constants/layout';
import colors from '../constants/colors';

class FloatingBottomBox extends React.Component {

  render() {
    const { children } = this.props;
    return (
      <View style={styles.container}>
        {children}
      </View>
    )
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
(FloatingBottomBox)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: colors.primaryBackground,
    borderTopRightRadius: layout.padding / 2,
    borderTopLeftRadius: layout.padding / 2,
    height: layout.height / 5,
    width: layout.width,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});
