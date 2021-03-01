import React from 'react'
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

export default function historyBar() {
    const clearHistory = () =>{
        try {
            AsyncStorage.setItem(
             'SearchResults',
             JSON.stringify([])
           );
       
        } catch (error) {
           // Error saving data
           console.log("could not create a save in history")
        }
    };
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={clearHistory}>
          <Text style={styles.clearText}>Clear All</Text>
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
         height:50,
         alignItems:'center'
     },
     logo:{
       flex:1,
       paddingTop:2,
       alignSelf:'center'
     },
     clearText:{
         color:'white'
     }

});