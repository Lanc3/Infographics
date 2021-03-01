import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/splashScreen';
import SearchScreen from './src/screens/searchScreen';
import DetailedScreen from './src/screens/detailedScreen';
import SetAgeScreen from './src/screens/setAgeScreen';
import SetCountryScreen from './src/screens/setCountryScreen';
import SetNameScreen from './src/screens/setNameScreen';
import SetRoleScreen from './src/screens/setRoleScreen';
import SetPhotoScreen from './src/screens/setPhotoScreen';
import AboutUsScreen from './src/screens/aboutUsScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} options={{headerShown: false}} />
      <Stack.Screen name="SetAgeScreen" component={SetAgeScreen} options={{headerShown: false}} />
      <Stack.Screen name="SetCountryScreen" component={SetCountryScreen} options={{headerShown: false}} />
      <Stack.Screen name="SetNameScreen" component={SetNameScreen} options={{headerShown: false}} />
      <Stack.Screen name="SetRoleScreen" component={SetRoleScreen} options={{headerShown: false}} />
      <Stack.Screen name="SetPhotoScreen" component={SetPhotoScreen} options={{headerShown: false}} />
      <Stack.Screen name="DetailedScreen" component={DetailedScreen} options={{headerShown: false}} />
      <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}