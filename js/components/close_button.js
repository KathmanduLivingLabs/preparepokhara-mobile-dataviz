import React from 'react';

import {Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../styles/styles';

var CloseButton = React.createClass({
  render: function(){
    return <Icon.Button
      name="ios-close-circle"
      backgroundColor="#10A0E6"
      size={30}
      onPress={this.props.onPress}
      style={styles.closeButton}>
    </Icon.Button>
  }
});

export default CloseButton;
