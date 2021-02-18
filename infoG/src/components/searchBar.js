import React,{useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, Platform, StyleSheet } from 'react-native'
import {Picker} from '@react-native-community/picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function searchBar({userName,onUserName,onSearchSubmit}) {
    const [selectedValue, setSelectedValue] = useState("EUW1");
    const [userNameValue,setUserNameValue] = useState("userName");
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
      <Picker
              selectedValue={selectedValue}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="BR1" value="br1" />
              <Picker.Item label="EUN1" value="eun1" />
              <Picker.Item label="EUW1" value="euw1" />
              <Picker.Item label="JP1" value="jp1" />
              <Picker.Item label="KR" value="kr" />
              <Picker.Item label="LA1" value="la1" />
              <Picker.Item label="LA2" value="la2" />
              <Picker.Item label="NA1" value="na1" />
              <Picker.Item label="OC1" value="oc1" />
              <Picker.Item label="TR1" value="tr1" />
              <Picker.Item label="RU" value="ru" />

            </Picker>
      </View>
      <View style={styles.inputLayout}>
      <TextInput 
                placeholder="Enter User Name"
                placeholderTextColor='white'
                style={styles.inputStyle}
                value={userName}
                onChangeText={newTerm => setUserNameValue(newTerm)}
                autoCapitalize = "none"
                autoCorrect = {false}
                onEndEditing={() => onSearchSubmit({name:userNameValue,region:selectedValue})}
            />
      </View>
      <View >
      <FontAwesomeIcon style={styles.plus} icon={faSearch} size={20}/>
      </View>
    </View>
  )
};


const styles = StyleSheet.create({
    plus:{
      flex:1,
        color: "white",
         fontSize: 50
     },
     container:{
         flexDirection:'row',
         borderBottomWidth:1,
         borderBottomColor:'white',
         maxHeight:150,
         alignItems:'center'
     },
     logo:{
       flex:1,
       paddingTop:2,
       alignSelf:'center'
     },
     inputStyle : {
         flex : 1,
         fontSize: 18,
         color:'white',
         alignSelf:'center',
         marginLeft:-320,
         borderLeftWidth:1,
         borderLeftColor:'white'
     },
     picker:{
        height:50,
        width:110,
        color:'white'
     },
     inputLayout:{
        justifyContent:'flex-start'
     }
});