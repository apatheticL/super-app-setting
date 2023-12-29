import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import {GestureHandlerRootView} from "react-native-gesture-handler";

const App = () => {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <NavigationContainer>
                <MainNavigator/>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
};

export default App;
