import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  DrawerLayoutAndroid,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SideMenu from './navigation_drawer';
import styles from '../styles/styles';
import FilterButton from './filter_button';
import InsightsButton from './insights_button';
import NavigationButton from './navigation_button';
import Loading from './loading';
import FetchData from '../api/fetch_data';

import MapView from './map'
import Filters from './filter.js'

var PreparePokhara = React.createClass({
  getInitialState: function(){
    return {
      isLoading: true,
      amenity: 'hospital',
      filters: {},
      ward: '',
      variables: {},
      annotations: [],
      attributes: [],
      filtersVisible: false
    }
  },
  render: function(){
     var navigationView = <SideMenu itemSelected={this.drawerItemSelected}/>;
     return  <DrawerLayoutAndroid
      ref={'DRAWER'}
      drawerWidth={280}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}>
      <View style={styles.container}>
        <View style={styles.header}>
        <Filters visible={this.state.filtersVisible}
          onFilterApplied={this.applyFilter}
          onFilterClose={this.onFilterClose}
          amenity={this.state.amenity}/>
          <NavigationButton onPress={this.openDrawer}/>
          <Text style={styles.header1}>PREPARE</Text>
          <Text style = {styles.header2}>POKHARA</Text>
        </View>
        <View style={styles.content}>
          {this.state.isLoading ? this.renderLoading() : this.renderMapComponent()}
        </View>
        <View style={styles.footer}>
          <FilterButton onPress={this.filterButtonPressed}/>
          <InsightsButton />
        </View>
      </View>
      </DrawerLayoutAndroid>
  },
  filterButtonPressed: function(){
    this.setState({
      filtersVisible: true
    });
  },
  onFilterClose: function(){
    this.setState({
      filtersVisible: false
    });
  },
  applyFilter: function(){
    this.setState({
      filtersVisible:false,
      isLoading:true
    });
    this.updateMarkers(this.state.amenity,this.state.ward,this.state.filters,this.state.variables);
  },
  renderLoading: function(){
    return <Loading />
  },
  renderMapComponent: function(){
    return <MapView annotations={this.state.annotations}
    attributes={this.state.attributes}
    amenity={this.state.amenity}/>
  },
  componentDidMount: function(){
    this.updateMarkers(this.state.amenity,this.state.ward,this.state.filters,this.state.variables);
  },
  openDrawer: function(){
    this.refs['DRAWER'].openDrawer();
  },
  drawerItemSelected: function(selectedItem){
    this.refs['DRAWER'].closeDrawer();
    this.setState({
      amenity: selectedItem
    });
    this.updateMarkers(selectedItem,this.state.ward,this.state.filters,this.state.variables);
  },
  updateMarkers: function(type,ward,filters,variables){
    this.setState({
      isLoading: true
    });
    FetchData(type,ward,filters,variables)
    .then((data) => this.setState({
      annotations: data.annotations,
      attributes: data.attributes,
      isLoading: false
    }));
  }
});

AppRegistry.registerComponent('PreparePokhara', () => PreparePokhara);
