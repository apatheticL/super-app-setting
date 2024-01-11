import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MiniAppScreen from '../../screens/MiniAppScreen';
import HomeScreen from '../../screens/home/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import {MyTabBar} from "./MyTabBar";
import MiniAppNavigator from "../MiniAppNavigation";
export type BottomTabNavigation = {
  Home: undefined;
  MiniApp: undefined;
  Profile: undefined;
};
const Tab = createBottomTabNavigator<BottomTabNavigation>();
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={MiniAppNavigator} />
      <Tab.Screen name="MiniApp" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
export default BottomTabNavigation;
