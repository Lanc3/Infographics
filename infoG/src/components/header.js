import React ,{Component,useEffect, useState}from 'react';
import { View, Animated, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/Fonts.svg';



export default function header() {


  
  const onPress =()=>{
    console.log(this.refs.child)
  };

  return (
    <View style={styles.container}>
      

      <View style={styles.logo}>
        <Logo width={"60%"} height={"60%"} />
      </View>
      <View>
      
      </View>
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
         flexDirection:'row',
         borderBottomWidth:1,
         borderBottomColor:'white',
         maxHeight:150,
         alignItems:'center',
         zIndex:1,
         
     },
     logo:{
       flex:1,
       paddingTop:2,
       alignSelf:'center',
       left:-15
     }
});