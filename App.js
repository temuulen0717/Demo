import React from "react";
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoardScreen from './src/views/OnBoardScreen'
import DetailsScreen from './src/views/DetailsScreen'
import HomeScreen from './src/views/HomeScreen'
import Medicine from './src/views/Medicine'
import Profile from './src/views/ProFile'
import GoogleMap from './src/views/GoogleMap'
import MedNum from './src/views/med/MedNum'
import Plan from './src/views/plan'
import ProvincesScreen from "./src/views/ProvincesScreen";
import ArkhangaiScreen from "./src/views/ArkhangaiScreen";
import { ScreenStack } from "react-native-screens";

const Stack = createStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name = "OnboardScreen" component={OnBoardScreen}/>
        <Stack.Screen name = "DetailsScreen" component={DetailsScreen}/>
        <Stack.Screen name = "HomeScreen" component={HomeScreen}/>
        <Stack.Screen name = "Medicine" component={Medicine}/>
        <Stack.Screen name = "Profile" component={Profile}/>
        <Stack.Screen name = "GoogleMap" component={GoogleMap}/>
        <Stack.Screen name = "MedNum" component={MedNum}/>
        <Stack.Screen name = "Plan" component={Plan}/>
        <Stack.Screen name = "ProvincesScreen" component={ProvincesScreen}/>
        <Stack.Screen name = "ArkhangaiScreen" component={ArkhangaiScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;