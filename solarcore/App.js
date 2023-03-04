import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import login from "./pages/login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login"
          component={login}
        />
        <Stack.Screen name="Home"
          component={Home}
        />
        <Stack.Screen name="Profile"
          component={Profile}
        />
        <Stack.Screen name="Explore"
          component={Explore}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
