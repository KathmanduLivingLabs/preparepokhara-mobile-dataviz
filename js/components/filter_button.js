import React from 'react';

import {Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

var FilterButton = React.createClass({
  render: function(){
    return <Icon.Button
      name="ios-funnel"
      backgroundColor="#10A0E6"
      size={20}
      onPress={this.props.onPress}>
      <Text style ={{color:'#FFFFFF', fontSize: 15, marginRight:28}}>
      FILTERS
      </Text>
    </Icon.Button>
  }
});

export default FilterButton;
