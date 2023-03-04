import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "./pages/Login";
import Register from "./pages/Register"
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
      <Stack.Navigator>
      <Stack.Screen name="Register"
          options={{headerShown: false}}
          component={Register}
        />
        <Stack.Screen name="Login"
          options={{headerShown: false}}
          component={Login}
        />
        {/* <Stack.Screen name="Home"
          component={Home}
        /> */}
        <Stack.Screen name="Profile"
          options={{headerShown: false}}
          component={Profile}
        />
        <Stack.Screen name="Events"
          options={{headerStyle:{backgroundColor: '#D19F3D'},
            headerTintColor: '#fff',
          }}
          component={Events}
        />
        <Stack.Screen name="Hack the Future 2023"
          options={{headerStyle:{backgroundColor: '#D19F3D'},
            headerTintColor: '#fff',
          }}
          component={HTF}
        />
        <Stack.Screen name="March"
          options={{headerStyle:{backgroundColor: '#D19F3D'},
            headerTintColor: '#fff',
          }}
          component={March}
        />
        <Stack.Screen name="Explore"
          screenOptions={{headerShown: false}}
          component={Explore}
        />
        <Stack.Screen name="Leaderboard"
          component={Leaderboard}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
