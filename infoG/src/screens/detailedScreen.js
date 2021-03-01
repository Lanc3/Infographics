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
              <Header navi={navigation}/> 
              <ImageBackground source={BackgroundSVG} style={styles.image}>
                  
            <Text style={styles.currentEnteredText}>{name}</Text>
            <Text style={styles.currentEnteredText}>{region}</Text>
            <Text style={styles.currentEnteredText}>{level}</Text>
            <Text style={styles.currentEnteredText}>{splash}</Text>

            </ImageBackground>
          </View>

        );
  }
  
  const styles = StyleSheet.create({
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
      background:{
        backgroundColor:'#050019',
        height:'100%',
        flexDirection:'column'
      },
      image: {
        flex: 1,
        resizeMode: "cover",

      },
  });

  export default detailedScreen;