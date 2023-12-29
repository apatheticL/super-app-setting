import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {MainStackNavigationProp} from '../../navigation/MainNavigator';
import {HomeComponent} from "./HomeComponent";

const HomeScreen = () => {
    const navigation = useNavigation<MainStackNavigationProp>();
    const onProductPress = () => {

    }
    const onServicePress = () => {

    }
    const onClinicPress = () => {

    }
    const onNotifyPress = () => {

    }
    const onMarketPress = () => {

    }
    return (
        <HomeComponent onProductPress={onProductPress} onServicePress={onServicePress} onClinicPress={onClinicPress}
                       onNotificationPress={onNotifyPress} onMarketPress={onMarketPress}/>
    );
};

export default HomeScreen;
