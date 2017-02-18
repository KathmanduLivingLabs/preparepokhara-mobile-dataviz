import React from 'react';

import {
  View,
  Modal,
  Text
} from 'react-native';

import CloseButton from './close_button';
import styles from '../styles/styles';
import EditButton from './edit_button';

var FeatureDetails = React.createClass({
  render: function(){
    return <View>
    <Modal
      animationType={"slide"}
      transparent={false}
      visible={this.props.visible}
      onRequestClose={this.props.onClose} >
      <View style={styles.header}>

       <Text style={styles.header1}> 
          <Text style={styles.header1}>PREPARE</Text>
          <Text style = {styles.header2}>POKHARA</Text>
       </Text>

       <View style = {styles.detail_close}>
          <CloseButton onPress={this.props.onClose} />
       </View>
        
      </View>
      <View style={styles.content}>
        {this.displayData()}
      </View>
      <View style={styles.footer}>
        <EditButton/>
      </View>
    </ Modal>
    </View>
  },
  displayData: function(){
    //fetch view accoring to type here, this is just a place holder
    return <View>
      <Text style={styles.detail_title}>
        {this.getData('name')}
      </Text>

      <Text style={styles.detail_content}>
        {this.getData('nepaliName')}
      </Text>
        
      <Text style={styles.detail_content}>
        {this.getData('emergency')}
      </Text>
    </View>
  },
  getData: function(key){
    var attributes = this.props.data.filter((item) => {
      return item.id == this.props.featureId;
    });
    //Need to modify this to be more specific for all data types
    var notDefined = 'NA'
    if (attributes.length != 0){
      switch(key){
        case 'name':
          return attributes[0].tags.name || notDefined;
          break;
        case 'nepaliName':
          return attributes[0].tags["name:ne"] || notDefined;
          break;
        case 'emergency':
          return attributes[0].tags.emergency || notDefined;
          break;
        default :
          return 'NA';
      }
    }else {
      return '';
    }
  }
});

export default FeatureDetails;
