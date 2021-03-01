import React from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../assets/Fonts.svg'


export default function userDisplay({navigater,name,region,icon,level,splash}) {
  const onPress = () => {
    navigater.navigate("DetailedScreen",{name,region,icon,level,splash})
  }
  return (
    <TouchableOpacity onPress={onPress}>
    <ImageBackground source={{uri:splash}} style={styles.container}>
      <View style={styles.iconFormat}>
      <Image
              style={styles.tinyLogo}
              source={{uri: 'http://ddragon.leagueoflegends.com/cdn/11.4.1/img/profileicon/'+icon.toString()+'.png'}}
            />
        <Text style={styles.textFormat}>{level}</Text>
      </View>
      <View>
        <Text style={styles.textFormat}>{name}#{region}</Text>
      </View>
    </ImageBackground>
    </TouchableOpacity>
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
         height:100,
         alignItems:'center',
         padding:20,
         margin:10,
         elevation:-1,
     },
     logo:{
       flex:1,
       paddingTop:2,
       alignSelf:'center'
     },
     tinyLogo: {
       width: 50,
       height: 50,
       borderRadius:25,
       zIndex:0,
     },
     textFormat:{
         color:'white',
         fontSize:15,
         fontWeight:'bold'
     },
     iconFormat:{
         flexDirection:'column',
         alignItems:'center'
     },
     testingBounds:{
       borderColor:'white',
       borderWidth:1
     }
});