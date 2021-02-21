import React ,{Component,useEffect, useState}from 'react';
import {View ,FlatList,Text, Image,StyleSheet,ScrollView} from'react-native';
import SearchBar from '../components/searchBar';
import Header from '../components/header';
import useResults from '../hooks/useResults';
import UserDisplay from '../components/userDisplay';
import AsyncStorage from '@react-native-community/async-storage';
import HistoryBar from '../components/historyBar';

const searchScreen = () => {

    const [searchPlayerApi,selectedRegion,championsKey,searchResults,rankedFlexResults,soloResults, masteryResults,winLossResults,isReady, errorMessage] = useResults();
    const [ historyArray, setHistoryArray ] = useState([]);
   
    const retrieveHistory = async () => {
      try {
          const value = await AsyncStorage.getItem('SearchResults')
          if (value !== null) {
              // We have data!!
              setHistoryArray(JSON.parse(value));
            }
            else{
             
            }
          } catch (error) {
              
              console.log("no data")
          }
        }
        retrieveHistory();
        useEffect(() => {
          retrieveHistory();
      }, []);
   
  
        return (
          <View style={styles.background}>
            <Header />
            <SearchBar
            onSearchSubmit = {searchPlayerApi}
            />
            <HistoryBar/>
            <FlatList 
                vertical
                data={historyArray}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <View >
                        <UserDisplay name={item.name} region={item.region} icon ={item.icon} level ={item.level} splash={item.backgroundID}/>
                    </View>
                    
                )}
            />
            
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
  });

  export default searchScreen;