import React from 'react';
import {
    createNativeStackNavigator,
} from '@react-navigation/native-stack';

import MiniAppScreen from "../screens/MiniAppScreen";

export type MainStackParamList = {
    MiniApp: undefined;
};

const MiniApp = createNativeStackNavigator<MainStackParamList>();

const MiniAppNavigator = () => {
    return (
        <MiniApp.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <MiniApp.Screen name="MiniApp" component={MiniAppScreen} />
        </MiniApp.Navigator>
    );
};


export default MiniAppNavigator;
