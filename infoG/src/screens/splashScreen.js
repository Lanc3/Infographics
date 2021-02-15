import React ,{Component}from 'react';
import {View ,Text, TextInput,StyleSheet,TouchableOpacity,ScrollView} from'react-native';
import Logo from '../../assets/Logo.svg'

export default class splashScreen extends Component {

    constructor({route,props,navigation}) {
      super(props);
      this.navigation = navigation;
    }
    onPress = () =>{
        this.navigation.navigate("SearchScreen",{uri:'test'});
        console.log("hello")
    };
    render() {
        return (
          <View style={styles.background}>
              <View style={styles.logoContainer}>
                <Logo width={"90%"} height={"90%"} />
              </View>
              <View>
                <Text style={styles.poweredByText}>Powered By</Text>
              </View>
              <View style={styles.LogoText}>
                  <View>
                    <Text style={styles.virtuousText}>Virtuous</Text>
                  </View>
                  <View>
                    <Text style={styles.TechText}>Tech</Text>
                  </View>
              </View>
              <View>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={this.onPress}>
                        <Text>button</Text>
                </TouchableOpacity>
              </View>
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
      },
      button: {
        alignSelf: "center",
        alignItems:'center',
        backgroundColor: "#DD823E",
        padding: 10,
        margin:5,
        borderRadius:10,
        borderWidth:3,
        borderColor:'white',
        width:'90%'
      }
  });