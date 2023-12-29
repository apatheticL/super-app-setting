import React from "react";
import {Animated, TouchableOpacity, View} from "react-native";

const TopTabBar = ({state, descriptors, navigation, position}) => {
    return (
        <View style={{flexDirection: 'row'}}>
            {state.routes.map((route, index) => {
                const {options} = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    console.log('ửessss')
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                const inputRange = state.routes.map((_, i) => i);
                const opacity = position.interpolate({
                    inputRange,
                    outputRange: inputRange.map(i => (i === index ? 1 : 0.8)),
                });
                const getStyle =() =>{
                    return isFocused ? {
                        backgroundColor: 'blue',
                    } : {
                        backgroundColor: 'white',
                    };
                }
                const styleText =
                     isFocused ? {
                        color: 'white',
                    } : {
                         color: 'black',
                    };

                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={[{
                            flex: 1,
                            backgroundColor: 'white',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingVertical: 8,
                        }, getStyle()]}
                    >
                        <Animated.Text style={[{opacity},styleText,{ textAlign:'center', fontSize: 15}]}>
                            {label}
                        </Animated.Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
export default TopTabBar;