// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FlatListLession from './src/FourthWeek/FlatListLession';
import HomeFC from './src/FourthWeek/HomeFC';
import { NavigationRouts } from './src/FifthWeek/enum';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={NavigationRouts.FLAT_LIST_LESSSON} component={FlatListLession} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;