'use strict';
import React from 'react';
import {StyleSheet} from 'react-native';


var styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'stretch'
  },
  header:{
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    borderBottomColor :"#10A0E6",
    borderBottomWidth : 5
  },
  content:{
    flex: 10
  },
  footer:{
    flex:1,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  header1:
  {
    color: '#10A0E6',
    marginLeft:15,
    fontSize:25
  },
  header2:
  {
    color:"#23769E",
    fontSize: 25
  },
  mapContainer: {
    flex: 1
  },
  map: {
    flex: 1
  },
  loadingText: {
    fontSize: 25
  },
  loadingIndicator: {
    margin: 15
  },
  loadingContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeButton: {
    alignSelf: 'flex-end'
  }


});
export default styles;
