import React from 'react';

import {Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

var NavigationButton = React.createClass({
  render: function(){
    return <Icon.Button
      name="ios-menu"
      backgroundColor="transparent"
      color = "#10A0E6"
      size ={40}
      iconStyle={{marginLeft: 0}}
      onPress={this.props.onPress}>
    </Icon.Button>
  }
});

export default NavigationButton;
