import React ,{Component, useState}from 'react';
import {View ,Text, TextInput,StyleSheet,ScrollView} from'react-native';
import SearchBar from '../components/searchBar'
import Header from '../components/header'
import useResults from '../hooks/useResults'
const searchScreen = () => {

    const [searchPlayerApi,championsKey,searchResults,rankedFlexResults,soloResults, masteryResults,winLossResults,isReady, errorMessage] = useResults();
    const log = (value) =>{
      console.log(value)
    }
 
  
        return (
          <View style={styles.background}>
            <Header />
            <SearchBar
            onSearchSubmit = {searchPlayerApi}
            />
            <Text style={styles.infoText}>summonerLevel : {searchResults.accountId}</Text>
            <Text style={styles.infoText}>id : {searchResults.id}</Text>
            <Text style={styles.infoText}>name : {searchResults.name}</Text>
            <Text style={styles.infoText}>profileIconId : {searchResults.profileIconId}</Text>
            <Text style={styles.infoText}>puuid : {searchResults.puuid}</Text>
            <Text style={styles.infoText}>revisionDate : {searchResults.revisionDate}</Text>
            <Text style={styles.infoText}>summonerLevel : {searchResults.summonerLevel}</Text>
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
      }
  });

  export default searchScreen;