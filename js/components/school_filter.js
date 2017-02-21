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
import CheckBox from './checkbox'

var SchoolFilter = React.createClass({
  getInitialState: function(){
    return {
      selectedWard: 1,
      numberofStudent: 1903
    }
  },
  render: function(){
    return <ScrollView>
      <View style={styles.filterContainer}>
        <Text style={styles.header2}>
          OPERATOR TYPE
        </Text>
        <View style={styles.controlsContainer}>
          {this.renderCheckbox()}
        </View>
        <Text style={styles.header2}>
          STUDENTS
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
  renderCheckbox: function(){
    return <View>
      <CheckBox
        label='Private'
        onChange={(checked) => console.log('I am checked', checked)}
      />
      <CheckBox
        label='Government'
        onChange={(checked) => console.log('I am checked', checked)}
      />
      <CheckBox
        label='Community'
        onChange={(checked) => console.log('I am checked', checked)}
      />
      <CheckBox
        label='Others'
        onChange={(checked) => console.log('I am checked', checked)}
      />
    </View>

  },
  renderSlider: function(){
    return <View style={styles.singleControlContainer}>
      <Slider stepsize={1}
        minimum={0}
        maximum={this.state.numberofStudent}/>
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
  populateDropDown: function(){
    //TODO get ward list from api
    return <Picker.Item label={'Dummy'} value={1} key={0} />
  }
});

export default SchoolFilter;
