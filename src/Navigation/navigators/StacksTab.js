import React from 'react';
import {Audio, Player} from '../../Screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function StacksTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Player"
        component={Player}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Audio"
        component={Audio}
      />
    </Stack.Navigator>
  );
}
export default StacksTab;
