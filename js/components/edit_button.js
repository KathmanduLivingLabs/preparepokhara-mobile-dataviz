import React from 'react';

import {Text} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

import styles from '../styles/styles';
var EditButton = React.createClass({
  render: function(){
    return(
    	
			 <Icon.Button
		      name="edit"
		      backgroundColor="#10A0E6"
		      size={15}
		      onPress={this.props.onPress}
		      style={styles.closeButton}>
		      <Text style ={{color:'#FFFFFF', fontSize: 15, marginRight:30, marginLeft:20}}>EDIT</Text>
		    </Icon.Button>

    	); 
  },
  onButtonPress: function(){
  	return null;
  }
});

export default EditButton;