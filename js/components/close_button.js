import React from 'react';

import {
  Text,
  View,
  Button
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../styles/styles';

var CloseButton = React.createClass({
  render: function(){
    return <Icon.Button
      name="ios-close"
      backgroundColor="#10A0E6"
      size={15}
      onPress={this.props.onPress}
      style={styles.closeButton}>
      <Text style ={{color:'#FFFFFF', fontSize: 15, marginRight:30, marginLeft:20}}>CLOSE</Text>
    </Icon.Button>
  }
});

export default CloseButton;
