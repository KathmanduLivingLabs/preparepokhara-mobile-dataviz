import React from 'react';

import {
  Text,
  Button,
  Switch,
  View
} from 'react-native';

import MultiSlider from '@ptomasroos/react-native-multi-slider';

import styles from '../styles/styles';

var Slider = React.createClass({
  getInitialState: function(){
    return {
      sliderCurrentValues: [this.props.minimum, this.props.maximum],
      slideLength: 320,
      touchDimensions: {
        height: 50,
        width: 50,
        borderRadius: 15,
        slipDisplacement: 20
      },
      sliderActive: false
    }
  },
  valuesChangeStart: function(){
    this.setState({
      sliderActive: true
    });
  },
  valuesChange: function(values){
    this.setState({
      sliderCurrentValues: values
    });
  },
  valuesChangeFinish: function(){
    this.setState({
      sliderActive: true
    });
  },
  render: function(){
    return <View style={styles.multiSliderContainer}>
      <MultiSlider values={this.state.sliderCurrentValues}
        sliderLength={this.state.slideLength}
        step={this.props.stepsize}
        min={this.props.minimum}
        max={this.props.maximum}
        onValuesChangeStart={this.valuesChangeStart}
        onValuesChange={this.valuesChange}
        onValuesChangeFinish={this.valuesChangeFinish}/>
      <View style={styles.multiSliderFromToContainer}>
        <Text>
        FROM : {"  "}{this.state.sliderCurrentValues[0]}
        </Text>
        <Text>
        TO : {"  "}{this.state.sliderCurrentValues[1]}
        </Text>
      </View>
    </View>
  }
});

export default Slider;
