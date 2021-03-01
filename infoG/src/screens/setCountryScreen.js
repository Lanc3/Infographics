import React ,{Component,useEffect, useState}from 'react';
import { View, Animated, Text, ImageBackground, Platform, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/Fonts.svg';
import Header from '../components/header';
import DrawerMenu from '../components/drawerMenu';
import BackgroundSVG from '../../assets/circut.png';



export default function setCountryScreen({route,props,navigation}) {


  return (
    <View style={styles.container}>
        <DrawerMenu navi={navigation}/>
        <Header navi={navigation}/>       

    </View>
  )
};


const styles = StyleSheet.create({
    plus:{
      flex:1,
        color: "white",
         fontSize: 50,
     },
     container:{
        backgroundColor:'#3A3A3A',
        height:'100%',
        flexDirection:'column'
         
     },
     logo:{
       flex:1,
       paddingTop:2,
       alignSelf:'center',
       left:-15
     }
});