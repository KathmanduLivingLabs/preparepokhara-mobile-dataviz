import React from 'react';

import {Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

var InsightsButton = React.createClass({
  render: function(){
    return <Icon.Button name="ios-glasses" backgroundColor="#10A0E6" size={30} onPress={this.insights} >
     <Text style ={{color:'#FFFFFF', fontSize: 20, marginRight:18}}>INSIGHTS</Text>
    </Icon.Button>
  },
  insights: function(){
    console.log("Insights Pressed")
  }
});

export default InsightsButton;
