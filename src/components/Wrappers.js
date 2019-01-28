import React from 'react';
import { ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import layout from '../constants/layout';

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

export const MessageContainer = props => {
  const { children } = props;
  return (
    <ScrollView
      ref={ref => this.scrollView = ref}
      contentContainerStyle={[
        styles.contentContainerStyle,
      ]}
      onContentSizeChange={(contentWidth, contentHeight)=>{        
        this.scrollView.scrollToEnd({animated: true});
      }}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'flex-end',
  },
  contentContainerStyle: {
    width: layout.width,
    justifyContent:'flex-end',
    padding: layout.padding,
  },
});