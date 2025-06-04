import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdicionarTreino from '../screens/AdicionarTreino';
import Home from '../screens/Home';
import Calendario from '../screens/Calendario';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AdicionarTreino" component={AdicionarTreino} />
      <Stack.Screen name="Calendario" component={Calendario} />
    </Stack.Navigator>
  );
}
