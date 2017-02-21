import React from 'react';

import {
  Switch,
  Text,
  View
} from 'react-native';

import styles from '../styles/styles'

var SwitchButton = React.createClass({
  render: function(){
    return <View style={styles.switchContainer}>
      <Switch onValueChange={this.props.onValueChange}
        style={styles.switchStyle}
        value={this.props.value} />
      <Text style={styles.switchText}>
        {this.props.switchText}
      </Text>
    </View>
  }
});

export default SwitchButton;
