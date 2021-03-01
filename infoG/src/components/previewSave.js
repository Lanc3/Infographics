import React ,{Component,useEffect, useState}from 'react';
import { View, Animated, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/Fonts.svg';



export default function previewSave({navi}) {


  
  const onPress =()=>{
    navi.navigate("SearchScreen");
  };

  return (
    <View style={styles.container}>
      

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
        backgroundColor:'#050019',
        height:'100%',
        flexDirection:'column'
         
     },
     logo:{
       flex:1,
       paddingTop:2,
       alignSelf:'center',
       left:-15
     },
     title:{
         color:'white',
         fontSize:30,
         alignSelf:'center',
       borderBottomColor:'#d9a718',
       borderBottomWidth:1
         
     },
     blurbText:{
         color:'#d9a718',
         fontSize:10,
         alignSelf:'center'
     },
     currentText:{
        color:'white',
        fontSize:18,
        alignSelf:'center'
     },
     currentEnteredText:{
        color:'#d9a718',
        fontSize:15,
        alignSelf:'center'
     },
     currentNameLayout:{
         flexDirection:'row',
         alignContent:'center',
         justifyContent:'flex-start',
         paddingTop:10
     },
     currentNameEnteredLayout:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'flex-start',
        paddingTop:10,
        borderBottomColor:'#00e5bf',
        borderBottomWidth:1
    },
     inputStyle:{
         color:'black',
         backgroundColor:'white',
         borderTopRightRadius:16,
         borderColor:'#d9a718',
         borderWidth:3,
         flex:0.9,
         marginBottom:20
     }
});