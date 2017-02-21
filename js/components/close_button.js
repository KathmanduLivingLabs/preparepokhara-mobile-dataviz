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
    return <View style={styles.closeButtonContainer}>
    <Button onPress={this.props.onPress}
     title="X"
     color="#10A0E6"
     accessibilityLabel="close button"/>
   </View>
  }
});

export default CloseButton;
