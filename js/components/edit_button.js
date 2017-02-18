import React from 'react';

import {View,Text, Button} from 'react-native';
import styles from '../styles/styles';

var EditButton = React.createClass({
  render: function(){
    return(
    	<View  style={styles.edit_button}>
		         <Button
		          disabled
		          onPress={this.onButtonPress}
		          title="EDIT"
				  color="#10A0E6"
				  accessibilityLabel="Edit content"
				/>
		</View>

    	); 
  },
  onButtonPress: function(){
  	return null;
  }
});

export default EditButton;