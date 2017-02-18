import React from 'react';

import {Text,View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Insight_main from './insight';

var InsightsButton = React.createClass({
  render: function(){
    return <Icon.Button name="ios-glasses" backgroundColor="#10A0E6" size={30} onPress={this.props.onPress} >
     <Text style ={{color:'#FFFFFF', fontSize: 20, marginRight:18}}>INSIGHTS</Text>
    </Icon.Button>
  },
  
});

export default InsightsButton;
