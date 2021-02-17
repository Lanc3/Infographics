import React ,{Component, useState}from 'react';
import {View ,Text, TextInput,StyleSheet,ScrollView} from'react-native';
import {Picker} from '@react-native-community/picker';

export default class searchScreen extends Component {

    constructor({route,props,navigation}) {
      super(props);
       
      this.state = {
        selectedValue:'null'
      };
    }
 
    render() {
        return (
          <View style={styles.background}>
            <Picker
              selectedValue={this.state.selectedValue}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) => this.state.selectedValue(itemValue)}
            >
              <Picker.Item label="Eu West" value="euw1" />
              <Picker.Item label="North fucking america" value="na" />
            </Picker>
          </View>
        );
    }
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
      }
  });