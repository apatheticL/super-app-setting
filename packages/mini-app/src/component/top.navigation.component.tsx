import React, {FC} from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated';

const TAB_WIDTH = 150;
const TABS = ['Home', 'Search', 'Profile'];
interface  TopNavigationProds {
    onHomePress:()=>void;
    onClientRequest:()=> void;
    onTeamRequest:()=> void;

}
export const TopNavigationBar: FC<TopNavigationProds> =(props) => {
    const offset = useSharedValue(-TAB_WIDTH);

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: offset.value }],
    }));

    const handlePress = (tab: string) => {
        const newOffset = (() => {
            switch (tab) {
                case 'Home':{
                    props.onHomePress();
                    return -TAB_WIDTH;
                }
                case 'Search':{
                    props.onTeamRequest();
                    return 0;
                }
                case 'Profile':{
                    props.onClientRequest();

                    return TAB_WIDTH;
                }
                default:{
                    props.onHomePress();
                    return -TAB_WIDTH;

                }
            }
        })();

        offset.value = withTiming(newOffset);
    };

    return (
        <View style={styles.container}>
            <View style={styles.tabs}>
                {TABS.map((tab, i) => (

                    <Pressable
                        key={tab}
                        style={
                            i !== TABS.length - 1 ? [styles.tab, styles.divider] : styles.tab
                        }
                        onPress={() => handlePress(tab)}>
                        <Text style={styles.tabLabel}>{tab}</Text>
                    </Pressable>
                ))}
            </View>
            <Animated.View style={[styles.animatedBorder, animatedStyles]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    tabs: {
        flexDirection: 'row',
    },
    tab: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: TAB_WIDTH,
    },
    tabLabel: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    divider: {
        borderRightWidth: 1,
        borderRightColor: '#ddd',
    },
    animatedBorder: {
        height: 8,
        width: 64,
        backgroundColor: 'tomato',
        borderRadius: 20,
    },
});
