import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MyTabBar from './MyTabBar';
import MiniAppScreen from '../../screens/MiniAppScreen';
import HomeScreen from '../../screens/home/HomeScreen';
import ProfleScreen from '../../screens/ProfileScreen';
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
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MiniApp" component={MiniAppScreen} />
      <Tab.Screen name="Profile" component={ProfleScreen} />
    </Tab.Navigator>
  );
};
export default BottomTabNavigation;
