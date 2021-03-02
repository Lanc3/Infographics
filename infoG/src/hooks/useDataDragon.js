import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import useKey from '../secret/api';


export default () => {
    const emptyStats = {
        "freshBlood":true,
        "inactive":false,
        "leagueId":"0",
        "leaguePoints":0,
        "losses": 0,
        "queueType": "none",
        "rank": "none",
        "summonerId": "0",
        "summonerName": "No Selection",
        "tier":"none",
        "veteran": false,
        "wins": 0,
    };
    const emptyChampStats = [{
        
    }];
    const [version,setVersion] = useState('10.10.3216176');
    const [championsKey,setChampionsKey] = useState(emptyChampStats);
    const [isReady,setIsReady] = useState(false);
    const [progress,setProgress] = useState(0.0);
    

    //const API_KEY = 'RGAPI-8fa96e0d-32db-4ac1-a305-186fe2f965b7';
    const [API_KEY] = useKey();

    const saveDataDragonResults = async (results) => {
        try {  
            AsyncStorage.setItem(
             'DataDragonResults',
             JSON.stringify(results));  
             setProgress(1);
        } catch (error) {
                // Error saving data
                
        }
    }


    
    const getVersion =  async () => {
        setProgress(0.0);
        setIsReady(false);
        await fetch(`https://ddragon.leagueoflegends.com/api/versions.json` ,{
            method: 'GET',
            headers: {
                "Origin": "https://developer.riotgames.com",
                "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                "X-Riot-Token": API_KEY,
                "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7"
            }
        }).then(result => {
            //Here body is not ready yet, throw promise
            if (!result.ok) throw result;
            return result.json();
        })
        .then(result => {
            //Successful request processing
            setVersion(result[0]);
            setProgress(0.1);
            getDataDragon(result[0]);
        }).catch(error => {
            //Here is still promise
            /
            
        })
    };

    const getDataDragon =  async version => {
        await fetch(`http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json` ,{
            method: 'GET',
            headers: {
                "Origin": "https://developer.riotgames.com",
                "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                "X-Riot-Token": API_KEY,
                "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7"
            }
        }).then(result => {
            //Here body is not ready yet, throw promise
            if (!result.ok) throw result;
            return result.json();
        })
        .then(result => {
            //Successful request processing
            setProgress(0.2)
            setChampionNameToKey(result["data"]);
            
        }).catch(error => {
            //Here is still promise
          
           
        })
    };

    const setChampionNameToKey = data => {
        let array = [];
    
        for(let key in data)
        {
            array.push({"key":data[key]["key"],"name":key,"splashUri": `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${key}_0.jpg`});
        }
        
        setChampionsKey(array);
        setIsReady(true);
        setProgress(0.5);
        saveDataDragonResults({gameVersion:version,championKeyToName:array});
    };
 
    return [getVersion,version,championsKey,isReady,progress];
};

