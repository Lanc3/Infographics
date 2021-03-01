import React ,{Component,useEffect, useState}from 'react';
import { View, Text, Animated, Dimensions, TouchableOpacity,TouchableNativeFeedback, StyleSheet,ScrollView } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../assets/Fonts.svg'


export default function drawerMenu({navi}) {
    const [drawerAnimation,setDrawerAnimation] = useState(new Animated.Value(0));
    const [endValue,setEndValue] = useState(200);
    const [toggle,setToggle] = useState(false);

   
    const onName = ()=>{
        navi.navigate("SetNameScreen");
    };
    const onPhoto = ()=>{
        navi.navigate("SetPhotoScreen");
    };
    const onAge = ()=>{
        navi.navigate("SetAgeScreen");
    };
    const onPosition = ()=>{
        navi.navigate("SetRoleScreen");
    };
    const onAboutUS = ()=>{
        navi.navigate("AboutUsScreen");
    };
    const onPressOpen =()=>{
        if(!toggle)
        {
            setToggle(true);
            Animated.timing(drawerAnimation, 
                {
                toValue: -200,
                duration: 100,
                useNativeDriver:true
                }).start();
        }
        else{
            setToggle(false);
            Animated.timing(drawerAnimation, 
                {
                toValue: 0,
                duration: 100,
                useNativeDriver:true
                }).start();
        }
       
    };

    const makeClose =() =>{
        Animated.timing(drawerAnimation, 
            {
            toValue: 0,
            duration: 1,
            useNativeDriver:true
            }).start();
    };

  return (
      <View>
    <TouchableOpacity style={styles.button} onPress={onPressOpen}>
    <FontAwesomeIcon style={styles.plus} icon={faBars} size={50}/>
    </TouchableOpacity>
    <Animated.View
                style={[
                  styles.container,
                  {
                    transform: [
                      {
                        translateX: drawerAnimation,
                      },
                    ],
                  },
                ]}
              >
                  
                        <ScrollView
                            scrollEnabled={false} 
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                        >
                        <TouchableOpacity onPress={onName}>
                        <Text style={styles.menuText}>Set Name</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={onPhoto}>
                        <Text style={styles.menuText}>Set Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onAge}>
                        <Text style={styles.menuText}>Set Age</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onPosition}>
                        <Text style={styles.menuText}>Set Role</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onAboutUS}>
                        <Text style={styles.menuText}>About Us</Text>
                        </TouchableOpacity>
                        
                  </ScrollView>
                  <TouchableOpacity style={styles.testingBounds} onPress={onPressOpen}>
                        <FontAwesomeIcon style={styles.plus} icon={faWindowClose} size={50}/>
                        </TouchableOpacity>
    </Animated.View>
    </View>
  );
};
const windowHeight = Dimensions.get('window').height-100;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    plus:{
      flex:1,
        color: "#00e5bf",
         fontSize: 50,
     },
     container:{
        backgroundColor:'#3A3A3A',
        height:310,
        width:200,
        minHeight:310,
        minWidth:200,
        flexDirection:'column',
        position:'absolute',
        left:windowWidth,
        top:90,
        borderColor:'#00e5bf',
        borderWidth:1,
        zIndex:1,
        
     },
     logo:{
       flex:1,
       paddingTop:2,
       alignSelf:'center'
     },
     button:{
        position:'absolute',
        left:windowWidth-60,
        top:20,
        zIndex:2
        
     },
     testingBounds:{
        borderColor:'#00e5bf',
        borderWidth:1,
        zIndex:2,
        alignItems:'center'
     },
     menuText:{
         paddingTop:15,
        color:'white',
        fontWeight:'bold',
        alignSelf:'center',
        fontSize:25,
        borderBottomWidth:1,
        borderBottomColor:'#d9a718',
    },
});