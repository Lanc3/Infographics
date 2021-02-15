import React ,{Component}from 'react';
import {View ,Text, TextInput,StyleSheet,TouchableOpacity,ScrollView} from'react-native';


export default class searchScreen extends Component {

    constructor({route,props,navigation}) {
      super(props);

    }
 
    render() {
        return (
          <View style={styles.background}>
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