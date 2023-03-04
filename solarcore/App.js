import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
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
        <Stack.Screen name="Explore"
          options={{headerShown: false}}
          component={Explore}
        />
        <Stack.Screen name="HTF"
          options={{headerShown: false}}
          component={HTF}
        />
        <Stack.Screen name="March"
          options={{headerShown: false}}
          component={March}
        />
          <Stack.Screen name="Leaderboard"
          options={{headerShown: false}}
          component={Leaderboard}
        />
          <Stack.Screen name="Events"
          options={{headerShown: false}}
          component={Events}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}