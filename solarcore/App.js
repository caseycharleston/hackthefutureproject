import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Events from './pages/Events';
import HTF from './pages/HTF';
import March from './pages/March';
import Leaderboard from './pages/Leaderboard'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Register"
          component={Register}
        />
        <Stack.Screen name="Login"
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen name="Home"
          component={Home}
        />
        <Stack.Screen name="Profile"
          options={{headerShown: false}}
          component={Profile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}