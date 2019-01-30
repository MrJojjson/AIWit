import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import {
  setErrorMessage,
} from '../actions';

import {  } from '../apiservices';

import { getRegistrationState } from '../selectors';

import { Container } from '../components/Wrappers';
import InputGen, { ButtonGen, IconGen } from '../components/generic';

import FloatingBottomBox from '../components/FloatingBottomBox';
import Box from '../components/Box';
import CarouselGen from '../components/Carousel';
import colors from '../constants/colors';
import layout from '../constants/layout';

const DATA = [
  {
    title: 'Sign In'
  },
  {
    title: 'Sign Up'
  }
]

class RegistrationScreen extends React.Component {
  render() {
    const width = '40', height = '60';
    return (
      <Container vertical='flex-start'>
        <View style={styles.logoContainer}>
          <IconGen icon="send" sizeMultiplier={4}/>
        </View>
        <View style={styles.buttonContainer}>
          <CarouselGen data={DATA} type='button' layout='default' sliderWidth={layout.width} itemWidth={layout.width / 3.5}/>
        </View>
        <View style={styles.inputContainer}>
          <InputGen
            id="emailInput"
            placeholder="Email..."
            width='80'
            heightMultiplier={0.75}
          />
          <InputGen
            id="passwordInput"
            placeholder="Password..."
            width='80'
            heightMultiplier={0.75}
          />
        </View>
        <View>
          <ButtonGen
            title="Sign in"
            id="signUpButton"
            // onButtonPress={this.onClickButton}
            width='40'
            heightMultiplier={0.75}
            icon='person-add'
          />
        </View>
        {/* <FloatingBottomBox>
          <Box width={width} height={height} title='Login' icon='log-in' iconSize={1.5}/>
          <Box width={width} height={height} title='Sign up' icon='person-add' iconSize={1.5}/>
        </FloatingBottomBox> */}
      </Container>
      
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    setInitialData: text => {
      dispatch(setInitialData(text))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationScreen)

const styles = StyleSheet.create({
  logoContainer: {
    backgroundColor: colors.primaryBackground,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flex: 0.35,
    paddingTop: 40
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    flex: 0.2
  },
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    flex: 0.35
  }
});
