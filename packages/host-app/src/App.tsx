import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {routingInstrumentation} from "./AppContainer";

const App = () => {
    const navigation = React.useRef();

    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <NavigationContainer
                ref={navigation}
                onReady={() => {
                // Register the navigation container with the instrumentation
                routingInstrumentation.registerNavigationContainer(navigation);
            }}>
                <MainNavigator/>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
};

export default App;
