import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "./pages/Login";
import Register from "./pages/Register"
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Leaderboard from "./pages/Leaderboard";
import Events from "./pages/Events";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Register"
          component={Register}
        />
        <Stack.Screen name="Login"
          component={Login}
        />
        <Stack.Screen name="Profile"
          component={Profile}
        />
        <Stack.Screen name="Explore"
          component={Explore}
        />    
        <Stack.Screen name="Events"
          component={Events}
        />   
        <Stack.Screen name="Leaderboard"
          component={Leaderboard}
        />            
      </Stack.Navigator>
    </NavigationContainer>
  );
}
