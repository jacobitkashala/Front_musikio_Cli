import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {Users, Library, Podcast, Favories, Audio} from '../Screens';
import {McVectorIcon} from '../Components';
import StacksTab from './navigators/StacksTab';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#000000',
  },
};
// const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        initialRouteName="Player"
        activeColor="#FFFFFF"
        // barStyle={{backgroundColor: '#000000'}}
        // sceneContainerStyle={{ backgroundColor: 'red' }}
        // screenOptions={({ route }) => ({
        //   tabBarActiveTintColor: '#FFFFFF',
        //   tabBarInactiveTintColor: '#C4C4C4',
        // })}
      >
        <Tab.Screen
          name="StacksTab"
          component={StacksTab}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <McVectorIcon
                type="Fontisto"
                name="music-note"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Audio"
          component={Audio}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <McVectorIcon
                type="Fontisto"
                name="music-note"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favories"
          component={Favories}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <McVectorIcon
                type="MaterialIcons"
                name="favorite-border"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Library"
          component={Library}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <McVectorIcon
                type="Entypo"
                name="folder-music"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="PodCast"
          component={Podcast}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <McVectorIcon
                type="FontAwesome"
                name="microphone"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Users"
          component={Users}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <McVectorIcon
                type="FontAwesome5"
                name="user-circle"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
