import React ,{Component,useEffect, useState}from 'react';
import {View ,FlatList,Text, ImageBackground,StyleSheet,ScrollView} from'react-native';
import SearchBar from '../components/searchBar';
import Header from '../components/header';
import useResults from '../hooks/useResults';
import UserDisplay from '../components/userDisplay';
import AsyncStorage from '@react-native-community/async-storage';
import HistoryBar from '../components/historyBar';
import ProgressBar from 'react-native-progress/Bar';
import BackgroundSVG from '../../assets/circut.png';
import DrawerMenu from '../components/drawerMenu';

const detailedScreen = ({route,props,navigation}) => {
        const name = route.params.name;
        const region = route.params.region;
        const level = route.params.level;
        const splash = route.params.splash;
        return (
          <View style={styles.background}>
              <DrawerMenu navi={navigation}/>
              <Header />
              <ImageBackground source={BackgroundSVG} style={styles.image}>
                  
            <Text>{name}</Text>
            <Text>{region}</Text>
            <Text>{level}</Text>
            <Text>{splash}</Text>

            </ImageBackground>
          </View>

        );
  }
  
  const styles = StyleSheet.create({
    logoContainer:{
        flexDirection:'column',
        alignItems:'center',
        height:'50%',
        borderColor:'white',
        marginBottom:-50,
        marginTop:150
      },
      background:{
        backgroundColor:'#3A3A3A',
        height:'100%',
        flexDirection:'column'
      },
      LogoText:{
          flexDirection:'row',
          justifyContent:'center',
      },
      poweredByText:{
          color:'white',
          fontWeight:'bold',
          alignSelf:'center',
          paddingRight:100
      },
      virtuousText:{
          color:'#B5540B',
          fontSize:32,
      },
      TechText:{
          color:'#727272',
          fontSize:32
      },
      infoText:{
        color:'white',
        padding:3
      },
      tinyLogo: {
        width: 50,
        height: 50,
      },
      progressBar:{
        alignItems:'center'
      },
      image: {
        flex: 1,
        resizeMode: "cover",

      },
  });

  export default detailedScreen;