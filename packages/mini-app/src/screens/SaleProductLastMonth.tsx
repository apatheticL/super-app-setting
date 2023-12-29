import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {MainStackNavigationProp} from '../navigation/MainNavigator';
import {TopNavigationBar} from "../component/top.navigation.component";

const ProductForYouScreen = () => {
    const navigation = useNavigation<MainStackNavigationProp>();
    return (
        <View style={styles.container}>
            <Text>Product for Last Month</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 40,
    },
});

export default ProductForYouScreen;
