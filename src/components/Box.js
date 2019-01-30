import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { TextGen, IconGen } from './generic';

import layout from '../constants/layout';
import colors from '../constants/colors';

class Box extends React.Component {
  render() {
    const { width, height, title, icon, iconSize } = this.props;
    return (
      <View 
      style={[
        styles.container,
        width && { width: `${width}%` },
        height && { height: `${height}%` },
      ]}
      >
        {icon && <IconGen icon={icon} sizeMultiplier={iconSize} />}
        <TextGen title={title} lines={2} align='center' />
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
(Box)

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondaryBackground,
    borderRadius: layout.padding / 2,
    padding: layout.padding / 2,
    overflow: 'hidden',
    height: '50%',
    width: '40%',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
});
