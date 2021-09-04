/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import TransactionDetail from './src/Screens/TransactionDetail/TransactionDetail';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Main = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Transaction"
        component={App}
      />
      <Stack.Screen
        name="Transaction Detail"
        component={TransactionDetail}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

AppRegistry.registerComponent(appName, () => Main);
