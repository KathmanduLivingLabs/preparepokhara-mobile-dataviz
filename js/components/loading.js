import React from 'react';

import {
  ActivityIndicator,
  View,
  Text
} from 'react-native';

import styles from '../styles/styles'

var Loading = React.createClass({
  render: function(){
    return <View style={styles.loadingContainer}>
    <ActivityIndicator
          animating={true}
          color="black"
          size="large"
          style={styles.loadingIndicator}/>
      <Text style={styles.loadingText}>
        Fetching Data...
      </Text>
    </View>
  }
});

export default Loading;
