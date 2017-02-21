import React from 'react';

import {
  Text,
  Button,
  Alert,
  ScrollView,
  Picker,
  View
} from 'react-native';

import styles from '../styles/styles';
import Slider from './slider';
import Switch from './switch';

var BankFilter = React.createClass({
  getInitialState: function(){
    return {
      atm: false,
      selectedWard: 1,
      maximumBedcapacity: 750
    }
  },
  render: function(){
    return <ScrollView>
      <View style={styles.filterContainer}>
        <Text style={styles.header2}>
          FACILITIES
        </Text>
        <View style={styles.controlsContainer}>
          {this.renderSwitches()}
        </View>
        <Text style={styles.header2}>
          OPERATOR
        </Text>
        <View style={styles.controlsContainer}>
          {this.renderOperatorDropDown()}
        </View>
        <Text style={styles.header2}>
          WARD
        </Text>
        <View style={styles.controlsContainer}>
          {this.renderWardDropDown()}
        </View>
      </View>
    </ScrollView>
  },
  renderSwitches: function(){
    return <View>
      <Switch switchText='ATM'
        value={this.state.atm}
        onValueChange={(value)=>this.setState({icu: value},this.props.onSwitchToggle('ATM',value))}/>
      </View>
  },
  onPickerValueChange: function(value){
    this.setState({
      selectedWard: value
    });
  },
  renderOperatorDropDown: function(){
    return <Picker mode="dropdown"
      selectedWard={this.state.selectedWard}
      onValueChange={this.onPickerValueChange}>
      {this.populateDropDown()}
    </Picker>
  },
  renderWardDropDown: function(){
    return <Picker mode="dropdown"
      selectedWard={this.state.selectedWard}
      onValueChange={this.onPickerValueChange}>
      {this.populateDropDown()}
    </Picker>
  },
  populateDropDown: function(){
    //TODO get ward list from api
    return <Picker.Item label={'Dummy'} value={1} key={0} />
  }
});

export default BankFilter;
