import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import DetailScreen from '../screens/DetailScreen';
import BottomTabNavigation from './bottom-tab/TabNavigation';

export type MainStackParamList = {
  Tab: undefined;
  Home: undefined;
  Detail: undefined;
  MiniApp: undefined;
};

export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackParamList>;

const Main = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Main.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Main.Screen name="Tab" component={BottomTabNavigation} />
      <Main.Screen name="Detail" component={DetailScreen} />
    </Main.Navigator>
  );
};


export default MainNavigator;
