import React from 'react';

import {
  View,
  Modal,
  Text,
  Button
} from 'react-native';

import CloseButton from './close_button';
import styles from '../styles/styles';
import HospitalFilter from './hospital_filter';
import SchoolFilter from './school_filter';
import BankFilter from './bank_filter';

var Filters = React.createClass({
  render: function(){
    return <View>
    <Modal
      animationType={"slide"}
      transparent={false}
      visible={this.props.visible}
      onRequestClose={this.props.onFilterClose} >
      <View style={styles.header}>
        <Text style={styles.header1}>FILTERS</Text>
        <CloseButton onPress={this.props.onFilterClose} />
      </View>
      <View style={styles.content}>
        {this.displayFilters()}
      </View>
      <View style={styles.footer}>
        <View  style={styles.applyFilter}>
          <Button
            onPress={this.props.onFilterApplied}
            title="APPLY FILTERS"
            color="#10A0E6"
          accessibilityLabel="Apply filters"/>
        </View>
      </View>
    </ Modal>
    </View>
  },
  displayFilters: function(){
    switch (this.props.amenity) {
      case 'hospital':
        return <HospitalFilter onSwitchToggle={this.switchButtonToggled}/>
        break;
      case 'school':
        return <SchoolFilter />
        break;
      case 'bank':
        return <BankFilter />
        break;
      default:
        return <Text> </Text>
    }
  },
  switchButtonToggled: function(switchType, isEnabled){
    var value = isEnabled ? 'yes' : 'no';
    var newFilters = this.state.filters;
    newFilters[switchType] = value;
    this.setState({
      filters: newFilters
    });
  }
});

export default Filters;
