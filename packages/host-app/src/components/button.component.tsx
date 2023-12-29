import {FC} from "react";
import {Gesture, GestureDetector} from "react-native-gesture-handler";
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import {StyleProp, StyleSheet, Text, TextProps, TouchableOpacity, View, ViewStyle} from "react-native";
import {pxToPercentage} from "../core/utils";
import {Color} from "../core/color";
import {textStyle} from "./TextStyle";

interface ButtonComponentProps {
    title: string;
    onPress: () => void;
    backgroundColor?: string,
    titleStyle?: StyleProp<TextProps>;
    buttonStyle?: StyleProp<ViewStyle>;
}

export const ButtonComponent: FC<ButtonComponentProps> = (props) => {
    const pressed = useSharedValue(false);
    const tap = Gesture.Tap()
        .onBegin(() => {
            pressed.value = true;
        })
        .onFinalize(() => {
            pressed.value = false;
        });
    const color = props.backgroundColor ?? Color.White;
    const animatedStyles = useAnimatedStyle(() => ({
        backgroundColor: pressed.value ? color : Color["Grey/100"],
        transform: [{scale: withTiming(pressed.value ? 1.2 : 1)}],
    }));
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPress} style={[styles.viewContainer, props.buttonStyle]}>
            <GestureDetector gesture={tap}>
                <Animated.View style={[styles.animation, animatedStyles]}>
                    <Text style={[styles.txtTitle, props.titleStyle]}>{props.title}</Text>
                </Animated.View>
            </GestureDetector>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    viewContainer: {
        flexDirection:"row",
        paddingHorizontal: pxToPercentage(24),
        paddingVertical: pxToPercentage(8),
        borderRadius: pxToPercentage(32)
    },
    animation: {
        alignItems: "center",
        paddingHorizontal: pxToPercentage(24),
        paddingVertical: pxToPercentage(8),
        minWidth: '90%',
        borderRadius: pxToPercentage(32)
    },
    txtTitle: {
        color: Color["Neutral/Dark Blue"],
        ...textStyle.sfProTextRegular,
        fontSize: pxToPercentage(16)
    }
})