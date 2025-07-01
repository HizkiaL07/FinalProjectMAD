import React from 'react';
import SplashScreen from './FINAL/Pages/SplashScreen';
import SignIn from './FINAL/Pages/SignIn';
import SignUp from './FINAL/Pages/SignUp';
import Riwayat from './FINAL/Pages/Riwayat';
import Home from './FINAL/Pages/Home';
import Mentor from './FINAL/Pages/Mentor';
import Profile from './FINAL/Pages/Profile';
import Paket1 from './FINAL/Pages/Paket1';
import Paket2 from './FINAL/Pages/Paket2';
import Paket3 from './FINAL/Pages/Paket3';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Riwayat"
          component={Riwayat}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Mentor"
          component={Mentor}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Paket1"
          component={Paket1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Paket2"
          component={Paket2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Paket3"
          component={Paket3}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
