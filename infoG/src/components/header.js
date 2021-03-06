import React ,{Component,useEffect, useState}from 'react';
import { View, Animated, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/Fonts.svg';



export default function header({navi}) {


  
  const onPress =()=>{
    if(navi)
    {
      navi.navigate("SearchScreen");
    }

  };

  return (
    <View style={styles.container}>
      

      <TouchableOpacity style={styles.logo} onPress={onPress}>
        <Logo width={"60%"} height={"60%"} />
      </TouchableOpacity>
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
         borderBottomColor:'#00e5bf',
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