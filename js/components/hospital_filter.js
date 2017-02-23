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

var HospitalFilter = React.createClass({
  getInitialState: function(){
    return {
      emergency: false,
      icu: false,
      nicu: false,
      ventilator: false,
      xray: false,
      ot: false,
      ambulance: false,
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
          BED CAPACITY
        </Text>
        <View style={styles.controlsContainer}>
          {this.renderSlider()}
        </View>
        <Text style={styles.header2}>
          WARD
        </Text>
        <View style={styles.controlsContainer}>
          {this.renderDropDown()}
        </View>
      </View>
    </ScrollView>
  },
  renderSwitches: function(){
    return <View>
      <Switch switchText='ICU'
        value={this.state.icu}
        onValueChange={(value)=>this.setState({icu: value},this.props.onSwitchToggle('ICU',value))}/>
      <Switch switchText='NICU'
        value={this.state.nicu}
        onValueChange={(value)=>this.setState({nicu: value},this.props.onSwitchToggle('NICU',value))}/>
      <Switch switchText='Ventilator'
        value={this.state.ventilator}
        onValueChange={(value)=>this.setState({ventilator: value},this.props.onSwitchToggle('Ventilator',value))}/>
      <Switch switchText='X Ray'
        value={this.state.xray}
        onValueChange={(value)=>this.setState({xray: value},this.props.onSwitchToggle('Xray',value))}/>
      <Switch switchText='Emergency'
        value={this.state.emergency}
        onValueChange={(value)=>this.setState({emergency: value},this.props.onSwitchToggle('Emergency',value))}/>
      <Switch switchText='Operation Theater'
        value={this.state.ot}
        onValueChange={(value)=>this.setState({ot: value},this.props.onSwitchToggle('Operation Theater',value))}/>
      <Switch switchText='Ambulance'
        value={this.state.ambulance}
        onValueChange={(value)=>this.setState({ambulance: value},this.props.onSwitchToggle('Ambulance',value))}/>
    </View>
  },
  toggleSwitch: function(value){
    console.log(value);
  },
  renderSlider: function(){
    return <View style={styles.singleControlContainer}>
      <Slider stepsize={10}
        minimum={0}
        maximum={this.state.maximumBedcapacity}/>
    </View>
  },
  onPickerValueChange: function(value){
    this.setState({
      selectedWard: value
    });
  },
  renderDropDown: function(){
    return <Picker mode="dropdown"
      selectedWard={this.state.selectedWard}
      onValueChange={this.onPickerValueChange}>
      {this.populateDropDown()}
    </Picker>
  },
  getMaximumBedCapacity: function(){
    //TODO get bed capacity from api
    return 750;
  },
  populateDropDown: function(){
    //TODO get ward list from api
    return <Picker.Item label={'Dummy'} value={1} key={0} />
  }
});

export default HospitalFilter;
