import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export const Container = props => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainerStyle}>
      {props.children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainerStyle: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
});