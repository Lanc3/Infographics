import React ,{Component,useEffect, useState}from 'react';
import { View, Animated, Text, ImageBackground, TextInput, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/Fonts.svg';
import Header from '../components/header';
import DrawerMenu from '../components/drawerMenu';
import BackgroundSVG from '../../assets/circut.png';


export default function setAgeScreen({route,props,navigation}) {
    const [name,setName] = useState("No save Data");

    const saveData = (value) => {
        
        console.log("saved")
    };

  return (
    <View style={styles.container}>
        <DrawerMenu navi={navigation}/>
        <Header navi={navigation}/>      
        <ImageBackground source={BackgroundSVG} style={styles.image}>
               
      <Text style={styles.title}>Save Your Age</Text>
      <Text style={styles.blurbText}>These details will show in the final infographic</Text>
      <View style={styles.currentNameLayout}>
          <Text style={styles.currentText}>Current Age :  </Text>
          <Text style={styles.currentEnteredText}>{name}</Text>
      </View>
      <View style={styles.currentNameEnteredLayout}>
          <Text style={styles.currentText}>Change Age: </Text>
          <TextInput 
                placeholder="Enter Your Name"
                placeholderTextColor='black'
                style={styles.inputStyle}
                onChangeText={newTerm => setName(newTerm)}
                autoCapitalize = "none"
                autoCorrect = {false}
                onEndEditing={() => saveData(name)}
            />
            
      </View>
      </ImageBackground>
      <View>
          <Text>Change Name: </Text>
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
     },
     image: {
        flex: 1,
        resizeMode: "cover",
        maxHeight:175
      },
});