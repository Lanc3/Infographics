import React from 'react'
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

export default function header({ title, onMenuPress }) {
  return (
    <View style={styles.container}>
        <FontAwesomeIcon style={styles.plus} icon={faCamera} size={100}/>
    </View>
  )
};


const styles = StyleSheet.create({
    plus:{
        color: "#FF9933",
         fontSize: 100,
         alignSelf:'center',
         marginTop:40
         
     },
     container:{
         
     }
});