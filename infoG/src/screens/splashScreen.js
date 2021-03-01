import React ,{Component,useState, useEffect}from 'react';
import {View ,Text, Animated,StyleSheet,TouchableOpacity,ScrollView} from'react-native';
import Logo from '../../assets/Logo.svg';
import DataDragon from '../hooks/useDataDragon';
import ProgressBar from 'react-native-progress/Bar';

const splashScreen = ({route,props,navigation}) => {

  const [startValue,setStartValue] = useState(new Animated.Value(0.5));
  const [endValue,setEndValue] = useState(0.9);
  const [getVersion,version,championsKey,isReady,progress] = DataDragon();
  const [animationIsFinished,setAnimationIsFinished] = useState(false);
    const goNextScreen = () =>{
        //this.navigation.navigate("SearchScreen");
        
    };
    

    useEffect(() => {
      componentDidMount();
      getVersion();
  }, []);

  useEffect(() =>{
   if(progress >= 1 && animationIsFinished === true)
   {
     navigation.navigate("SearchScreen");
   }
  });

    const componentDidMount = () =>{
      Animated.spring(startValue, {
        toValue: endValue,
        friction: 3,
        useNativeDriver: true,
      }).start(()=> {
        setAnimationIsFinished(true);
      });
    };

        return (
          <View style={styles.background}>
              <Animated.View
                style={[
                  styles.logoContainer,
                  {
                    transform: [
                      {
                        scale: startValue,
                      },
                    ],
                  },
                ]}
              >
                <Logo width={"90%"} height={"90%"} />
              </Animated.View>
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
              <View style={styles.progressBar}>
                <ProgressBar progress={progress} width={200} color={'#B5540B'}/>
                
              </View>
              
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
      },
      progressBar:{
        alignItems:'center'
      }
  });

  export default splashScreen;