import React from 'react';
import { ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';

export const Container = props => {
  const { children, vertical } = props;
  return (
    /* <ScrollView
      style={styles.container}
      contentContainerStyle={[
        styles.contentContainerStyle,
        vertical && { justifyContent: vertical }
      ]}
    > */
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      {children}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'flex-end',
  },
  // contentContainerStyle: {
  //   flex:1,
  //   alignItems:'center',
  //   justifyContent:'center',
  // },
});