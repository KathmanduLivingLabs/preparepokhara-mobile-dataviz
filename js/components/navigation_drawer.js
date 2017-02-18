import React, { Component } from 'react';
import {
  View, StyleSheet,Text, ListView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/styles';

const items = [
          {
              'amenities':'hospital',
              'label': 'HOSPITALS',
              'icon' : 'ios-medkit'
          },
          {
              'amenities':'school',
              'label': 'SCHOOLS',
              'icon': 'ios-school'
          },
          {
              'amenities':'bank',
              'label':'BANKS',
              'icon':'ios-cash'
          }

      ]

export default class Sideslide extends Component
{
  constructor(props){
      super(props);
      this.state = {
         currentState: 'hospital'
      };
  }

  _onpress(a){
    console.log('onpress');
     this.setState({
       currentState : a,
     }, this.props.itemSelected(a));
  }

  styler(state){
    return {color: state === this.state.currentState ?  '#FFFFFF': '#10A0E6'}
   }

   bg(state){
    return state === this.state.currentState ? '#10A0E6' : '#FFFFFF'
   }

  render(){
          return (
            <View style={styles.container}>
              <View style={styles.header}>
                <Text style={styles.header1}>PREPARE</Text>
                <Text style={styles.header2}>POKHARA</Text>
              </View>
              <View style={styles.content}>
                {this.render_()}
              </View>
              <View style={styles.footer}>
              </View>
            </View>
  );
  }

  render_(){
    return items.map(function(item,i){
      return(
        <View key={i}>
        <Icon.Button
          name={item.icon}
          size ={35}
          borderRadius={0}
          onPress={this._onpress.bind(this, item.amenities)}
          iconStyle = {this.styler(item.amenities)}
          backgroundColor={this.bg(item.amenities)}>
        <Text style= {this.styler(item.amenities)}>
        <Text style={{fontSize:30, fontFamily:'Signika-Bold'}}>
        {item.label}
        </Text>
        </Text>
        </Icon.Button>
        </View>
        );
    }.bind(this));
  }
}
