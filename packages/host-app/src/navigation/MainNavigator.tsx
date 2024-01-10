import React from 'react';
import {
    createNativeStackNavigator,
    NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import DetailScreen from '../screens/DetailScreen';
import BottomTabNavigation from './bottom-tab/TabNavigation';
import MiniAppScreen from "../screens/MiniAppScreen";

export type MainStackParamList = {
    Tab: undefined;
    Home: undefined;
    Detail: undefined;
    Shopping: undefined;
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
            <Main.Screen name="Tab" component={BottomTabNavigation}/>
            <Main.Screen name="Detail" component={DetailScreen}/>
            <Main.Screen name="Shopping" component={MiniAppScreen}/>
        </Main.Navigator>
    );
};


export default MainNavigator;
