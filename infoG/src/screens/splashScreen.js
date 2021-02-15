import React ,{Component}from 'react';
import {View ,Text, TextInput,StyleSheet,TouchableHighlight,ScrollView} from'react-native';
import Logo from '../../assets/Logo.svg'

export default class splashScreen extends Component {

    constructor({route,props,navigation}) {
      super(props);
    }

    render() {
        return (
          <View style={styles.background}>
              <Text>hello</Text>
              <View style={styles.logoContainer}>
                <Logo width={"90%"} height={"90%"} />
              </View>
              
          </View>
        );
    }
  }
  
  const styles = StyleSheet.create({
    logoContainer:{
        flex:1,
        alignItems:'center',
        width:'100%'
      },
      background:{
        backgroundColor:'#3A3A3A',
        height:'100%'
      }
  });