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
    fontFamily:'Signika-Bold',
    fontSize:25
  },
  header2:
  {
    color:"#23769E",
    fontFamily:'Signika-Bold',
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
  },
  content2:{
    color:"#23769E",
    fontSize: 20,
    marginLeft:10
  },
  content_filter:
  {
    flex:1
  },
  switchh:{
    flexDirection: 'row',
    justifyContent: 'flex-start' 
  },
  switch_content:{
    fontSize: 18,
    marginBottom: 12,
    fontFamily:'Signika-Regular',
    marginLeft: 10
  },
   switch_switch:{
    marginBottom:15,
    marginLeft:10
  },
  filter_button:{
    flex:1,
    marginLeft:40,
    marginRight:40
  },
  filter_close:{
    flex:1,
    justifyContent:'flex-end',
    marginLeft:200,
    marginRight:5
  },
 text_highlight:{
    fontFamily:'Signika-Bold',
    color: '#10A0E6',
    marginRight:15,
    fontSize:34
  },
  insight_maincomponent:{
    flex:10
  },

  text_fade:{
    fontFamily:'Signika-Bold',
    fontSize:18,
    color: '#B2B2B2',
    marginRight:45,
    marginTop:-8
  },
  text_atm:{
    fontFamily:'Signika-Bold',
    fontSize:18,
    color:'#B2B2B2',
    marginTop:-8,
    textAlign:'justify'
  },
  text_fadebig:{
    color: '#B2B2B2',
    fontSize:34,
  },
  content_insight:{
    flex:1
  },
  insight_component:{
    marginBottom:35,
    marginLeft:10

  },
  insight_componentview:{
    flexDirection:'row',
    justifyContent: 'space-between'
  },
   detail_close:{
    flex:1,
    justifyContent:'flex-end',
    marginRight:10,
    marginLeft:50
  },
  detail_title:{
    fontFamily:'Signika-Bold',
    borderBottomColor :"#9C8AA5",
    borderBottomWidth : 2,
    color: '#AA0114',
    marginRight:15,
    marginLeft:15,
    marginTop:20,
    marginBottom:20,
    fontSize:20
  },
  detail_content:{
    fontFamily:'Signika-Regular',
    color:'#003366',
    marginRight:15,
    marginLeft:20,
    marginBottom:5,
    textAlign:'auto',
    fontSize:20,

  }


});
export default styles;
