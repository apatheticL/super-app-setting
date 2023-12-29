import React from 'react';
import {StyleSheet} from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import GalleryScreen from '../screens/GalleryScreen';
import TopNavigation from "./top-navigation/TopNavigation";

export type MainStackParamList = {
  // Home: undefined;
  // Gallery: undefined;
  Tab: undefined;
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
        <Main.Screen name="Tab" component={TopNavigation} />

      {/*  <Main.Screen name="Home" component={HomeScreen} />*/}
      {/*<Main.Screen name="Gallery" component={GalleryScreen} />*/}
    </Main.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(79, 55, 139, 1)',
  },
  headerTitle: {
    color: 'rgba(255,255,255,1)',
  },
});

export default MainNavigator;
