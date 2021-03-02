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

const searchScreen = ({route,props,navigation}) => {

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
              

          }
        }
        retrieveHistory();
        useEffect(() => {
          retrieveHistory();
      }, []);
   
  
        return (
          <View style={styles.background}>
            <DrawerMenu navi={navigation}/>
            <Header />
            <SearchBar
            onSearchSubmit = {searchPlayerApi}
            />
            <HistoryBar/>
            <ImageBackground source={BackgroundSVG} style={styles.image}>
            {isReady !== "searching"?
            <FlatList 
            style={{elevation:0}}
                vertical
                data={historyArray}
                keyExtractor={item => item.idKey}
                renderItem={({item}) => (
                    <View >
                        <UserDisplay navigater={navigation} name={item.name} region={item.region} icon ={item.icon} level ={item.level} splash={item.backgroundID}/>
                    </View>
                    
                )}
            /> :  <View style={styles.progressBar}>
                    <ProgressBar indeterminate={true} width={200} color={'#B5540B'}/>
                  </View>
              }
            </ImageBackground>
          </View>
        );
    
  }
  
  const styles = StyleSheet.create({
    logoContainer:{
        flexDirection:'column',
        alignItems:'center',
        height:'50%',
        borderColor:'#00e5bf',
        marginBottom:-50,
        marginTop:150
      },
      background:{
        backgroundColor:'#050019',
        height:'100%',
        flexDirection:'column',
        zIndex:0,
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
        justifyContent: "center"
      },
  });

  export default searchScreen;