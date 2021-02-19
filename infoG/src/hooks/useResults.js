import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';


export default () => {
    const winLossChamp = new Map();
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
        "imageData": {
        "full": "Ivern.png",
        "group": "champion",
        "h": 48,
        "sprite": "champion1.png",
        "w": 48,
        "x": 48,
        "y": 48,
        },
        "key": "427",
        "name": "Ivern",
    }];
    const [version,setVersion] = useState('10.10.3216176');
    const [championsKey,setChampionsKey] = useState(emptyChampStats);
    const [searchResults,setSearchResults] = useState([]);
    const [errorMessage,setErrorMessage] = useState('');
    const [rankedFlexResults, setRankedFlexREsults] = useState(emptyStats);
    const [soloResults,setSoloResultsREsults] = useState(emptyStats);
    const [masteryResults,setMasteryResults] = useState([{"championId":0,"championLevel":0},{"championId":0,"championLevel":0},{"championId":0,"championLevel":0}]);
    const [accountIdResults,setAccountIdResults] = useState(0);
    const [matchListResults,setMatchListResults] = useState([]);
    const [matchResults,setMatchResults] = useState({});
    const [summonerNameResults,setSummonerNameResults] = useState("");
    const [winLossResults,setWinLossResults] = useState([]);
    const [isReady,setIsReady] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState('euw1');
    

    const API_KEY = 'RGAPI-ca0fea8f-d215-40da-85be-2b7ad367d0c3'
    const searchPlayerApi =  async (value) => {
        await fetch(`https://${value.region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${value.name}` ,{
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
            getChampionMastery(result.id);
            setIsReady(true);
            saveSearchResults(result,value.region,masteryResults[0]);
            setSearchResults(result);
            setSelectedRegion(value.region);
            setAccountIdResults(result.accountId);
            //getMatchList(result.accountId);
           // getPlayerRank(result.id);
            
            setSummonerNameResults(searchTerm);
            console.log("finished")
            
        }).catch(error => {
            //Here is still promise
            //console.log(error);
            
        })
    };

    const saveSearchResults = async (results,regionResults,championID) => {
        
        try {
            const value = await AsyncStorage.getItem('SearchResults')
            if (value !== null) {
                // We have data!!
                
                let array = JSON.parse(value);
                
                array.push({name:results.name,region:regionResults,icon:results.profileIconId,level:results.summonerLevel,backgroundID:championID})
                let uniqueSet = new Set(array);
                let uniqueArray = [...uniqueSet];
                try {
                    
                    AsyncStorage.setItem(
                     'SearchResults',
                     JSON.stringify(uniqueArray)
                   );
               
                 } catch (error) {
                   // Error saving data
                   console.log("could not create a save in history")
                 }
            }
              else{
                try {
                   
                    AsyncStorage.setItem(
                     'SearchResults',
                     JSON.stringify([{name:results.name,region:regionResults,icon:results.profileIconId,level:results.summonerLevel,backgroundID:championID}])
                   );
               
                 } catch (error) {
                   // Error saving data
                   console.log("could not create a save in history")
                 }
              }
            } catch (error) {
                
                console.log("failed to retrieve data")
            }
    }

    const getPlayerRank = async encryptedSummonerId => {
        await fetch(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedSummonerId}` ,{
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
            createPlayerData(result);
            
            //console.log(result)
        }).catch(error => {
            //Here is still promise
            //console.log(error);
            
        })
    };

    const getChampionMastery = async encryptedSummonerId => {
        await fetch(`https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${encryptedSummonerId}` ,{
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
            setMasteryResults(result[0]);
            console.log(result[0])
        }).catch(error => {
            //Here is still promise
            console.log(error);
            
        })
    };

    const getMatchList = async encryptedAccountId => {
        await fetch(`https://euw1.api.riotgames.com/lol/match/v4/matchlists/by-account/${encryptedAccountId}?queue=420&endIndex=50&beginIndex=0` ,{
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
            setMatchListResults(result.matches);
            setWinRateByChampion(result.matches);
        }).catch(error => {
            //Here is still promise
            console.log(error);
            
        })
    };
    const getMatchByGameId = async (gameId,champion) => {
        return await fetch(`https://euw1.api.riotgames.com/lol/match/v4/matches/${gameId}` ,{
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
            
            let participantId = 0;
            for(let i = 0; i<result['participantIdentities'].length; i++){
                let player = result['participantIdentities'][i];
                if(player['player']['summonerName'] === summonerNameResults)
                {
                    participantId = player['participantId'];
                }
               
            }
            if(participantId <= 5){
                participantId = 0;
            }
            else{
                participantId = 1;
            }
            //console.log(result['teams'][participantId]['win'])
            if(result['teams'][participantId]['win'] === 'Win'){
                return "win";
                //console.log(winLossChamp.get(champion))
            }
            else if(result['teams'][participantId]['win'] === 'Fail'){
                return "loss";
            }  
            else{
                return "null"
            }
        }).catch(error => {
            //Here is still promise
            //console.log(error); 
        })
    };
    const setWinRateByChampion = async matches => {
        let mapOfChampionGames = new Map();
        for(let i = 0; i<matches.length; i++){
            if(!mapOfChampionGames.has(matches[i].champion)){
                mapOfChampionGames.set(matches[i].champion,{total:1,wins:0,losses:0,games:[matches[i].gameId]})
            }
            else{
                mapOfChampionGames.get(matches[i].champion).total++;
                mapOfChampionGames.get(matches[i].champion).games.push(matches[i].gameId);
            }
        }
        for (const [key, value] of mapOfChampionGames.entries()) {
            for(let i = 0; i<value['games'].length;i++){
                await getMatchByGameId(value['games'][i]).then( response => {
                    if(response === "win"){
                        //console.log("win")
                        value['wins']++;
                    }
                    else{
                        value['losses']++;
                    }
                });
            }
        }
        let array = [];
        for (const [key, value] of mapOfChampionGames.entries()) {
            array.push({id:key, total:value['total'], wins:value['wins'], losses:value['losses']});
        }
        setWinLossResults(array);
        setIsReady("true");
    };

    const getTopThreeMasteries = arrayOfChampions => {
        let topThreeList = [];
        console.log(topThreeList)
        for(let i = 0; i < 2; i++)
        {
            topThreeList.push(arrayOfChampions[i]);
        }
        setMasteryResults(topThreeList);
        console.log(topThreeList)
    };

    const createPlayerData  = arrayOfQueues => {
        arrayOfQueues.forEach(function (value) { 
            if(value.queueType === 'RANKED_SOLO_5x5')
            {        
                setSoloResultsREsults(value);
            }
            if(value.queueType === 'RANKED_FLEX_SR')
            {
                setRankedFlexREsults(value);
            }
          });
    };
    const getVersion =  async () => {
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
            getDataDragon(result[0]);
        }).catch(error => {
            //Here is still promise
            //console.log(error);
            
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
            setChampionNameToKey(result["data"]);
            
        }).catch(error => {
            //Here is still promise
            //console.log(error);
           
        })
    };

    const setChampionNameToKey = data => {
        let array = [];
    
        for(let key in data)
        {
            array.push({"key":data[key]["key"],"name":key,"imageData":data[key]["image"],"wins":0,"losses":0});
        }
        setChampionsKey(array);
    };
    
    useEffect(() => {
        getVersion();
    }, []);


    return [searchPlayerApi,selectedRegion,championsKey, searchResults,rankedFlexResults,soloResults, masteryResults, winLossResults, isReady,errorMessage];
};

