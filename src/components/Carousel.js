import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { TextGen, ButtonGen } from './generic';

import Carousel from 'react-native-snap-carousel';

class CarouselGen extends React.Component {
  _renderItem = ({item, index}) => {
    const { type } = this.props;
    if (type === 'text') {
      console.log('item', item.title);
      return (
        <TextGen key={index} title={item.title} align='center'/>
      )
    }
    if (type === 'button') {
      return (
        <ButtonGen
          title={item.title}
          id={`${item.title.replace(/\s/g, '')}SwitchButton`}
          // onButtonPress={this.onClickButton}
          width='100'
          heightMultiplier={0.75}
          border='none'
        />
      );
    }
  }

  render () {
    const { data, sliderWidth, itemWidth, type, layout } = this.props;
    return (
      <Carousel
        ref={(c) => { this._carousel = c; }}
        data={data}
        renderItem={this._renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        layout={layout}
      />
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
(CarouselGen)
