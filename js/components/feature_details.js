import React from 'react';

import {
  View,
  Modal,
  Linking,
  ScrollView,
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
      </View>

      <View style={styles.contentfeature}>
        <ScrollView>
        {this.displayData()}
        </ScrollView>
      </View>
      <View style={styles.footerfeature}>
      <EditButton/>
      <CloseButton onPress={this.props.onClose} />
      </View>
    </ Modal>
    </View>
  },
  displayData: function(){
    //fetch view accoring to type here, this is just a place holder
  
    return <View>
      <Text style={styles.detail_title}>
        {this.getData('name')}
        {"\n"}({this.getData('nepaliName')})
      </Text>
      {this.displayData_type()}    
      
    </View>
  },
  displayData_type: function(){
     var str = this.getData('phone');
    var phoneno = str.split(",");
    switch(this.props.amenity){
      case 'hospital':
       return <Text style={styles.detail_content}>
               Emergency: {this.getData('emergency')}{"\n"}
               Emergency Service: {this.getData('emergency_service')}{"\n"}
               ICU: {this.getData('icu')}{"\n"}
               NICU: {this.getData('nicu')}{"\n"}
               Ventilator: {this.getData('ventilator')}{"\n"}
               Xray: {this.getData('xray')}{"\n"}
               Operation Theatre: {this.getData('operation_theatre')}{"\n"}
               Bed Capacity: {this.getData('beds')}{"\n"}
               Number of Staffs: {this.getData('personnel')}{"\n"}
               Operator Type: {this.getData('operator')}{"\n"}
               Phone: {this.phonesplit(phoneno)} {"\n"}
               Email:<Text style={{color: 'blue'}} onPress={() => Linking.openURL('mailto:'+this.getData('email'))}>  {this.getData('email')}</Text>{"\n"}
               Website: <Text style={{color: 'blue'}} onPress={() => Linking.openURL( 'http://' + this.getData('website'))}> {this.getData('website')}</Text>{"\n"}
               
              </Text>
              
       break;

      case 'school':
      return <Text style={styles.detail_content}>
              Number of Staffs: {this.getData('personnel')}{"\n"}
              Number of Students: {this.getData('students')}{"\n"}
              Operator Type: {this.getData('operator')}{"\n"}
             </Text>
      break;

      case 'bank':
      return <Text style={styles.detail_content}>
              ATM Service: {this.getData('atm')}{"\n"}
              Operator Type: {this.getData('operator')}{"\n"}
             </Text>
      break;

      default:
      return 'NA';
    }
  },
  phonesplit: function(phoneno){
    var j=",";
    return phoneno.map(function(item,i){
      console.log(item);
       if(phoneno.length == i+1)  {j = "";} 
        return  <Text key={i} style={{color: 'blue'}} onPress={() => Linking.openURL('tel:'+ item)}> {item}{j} </Text> 
       
   });
  },

  getData: function(key){
    var attributes = this.props.data.filter((item) => {
      return item.id == this.props.featureId;
    });
    //Need to modify this to be more specific for all data types
    var notDefined = "NA";
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
        case 'emergency_service':
          return attributes[0].tags["emergency:services"|| "emergency_service"] || notDefined;
          break;
        case 'icu':
          return attributes[0].tags["facility:icu"] || notDefined;
          break;
        case 'nicu':
          return attributes[0].tags["facility:nicu"] || notDefined;
          break;
        case 'ventilator':
          return attributes[0].tags["facility:ventilator"] || notDefined;
          break;
        case 'operation_theatre':
          return attributes[0].tags["facility:operating_theatre"||"facility:operation_theatre"] || notDefined;
          break;
        case 'xray':
          return attributes[0].tags["facility:x-ray"] || notDefined;
          break;
        case 'phone':
          return attributes[0].tags["phone"] || notDefined;
          break;
        case 'website':
          return attributes[0].tags["website"] || notDefined;
          break;
        case 'operator':
          return attributes[0].tags["operator:type"||"operator"||"brand"] || notDefined;
          break;
        case 'email':
          return attributes[0].tags["email"] || notDefined;
          break;
        case 'beds':
          return attributes[0].tags["capacity:beds"] || notDefined;
          break;
        case 'personnel':
          return attributes[0].tags["personnel:count"] || notDefined;
          break;
        case 'students':
          return attributes[0].tags["student:count"];
          break;
        case 'atm':
          return attributes[0].tags["atm"] || notDefined;
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
