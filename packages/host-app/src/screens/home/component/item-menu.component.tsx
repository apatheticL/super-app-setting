import {FC} from "react";
import {Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {pxToPercentage} from "../../../core/utils";
import {Color} from "../../../core/color";
import {textStyle} from "../../../components/TextStyle";
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import {Gesture, GestureDetector} from "react-native-gesture-handler";
import {styleHome} from "./styles";
interface ItemMenuProd{
    imageSource: ImageSourcePropType;
    title: string;
    onPress: ()=> void;
    theme?: 'default' | 'teal' | 'gray';
}
export const ItemMenuComponent : FC<ItemMenuProd> = (props)=>{
    let themeContainer = styleHome.defaultThemeContainer;
    if (props.theme === 'teal') {
        themeContainer = styleHome.tealThemeContainer;
    } else if (props.theme === 'gray') {
        themeContainer = styleHome.grayThemeContainer;
    }
    const pressed = useSharedValue(false);
    const tap = Gesture.Tap()
        .onBegin(() => {
            pressed.value = true;
        })
        .onFinalize(() => {
            pressed.value = false;
        });
    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ scale: withTiming(pressed.value ? 2 : 1) }],
    }));
    const itemView = () =>{
        return (
            <GestureDetector gesture={tap}>
                <Animated.View style={[styles.circle, animatedStyles, themeContainer]} >
                    <View style={styles.viewItem}>
                        <Image style={styles.icon} source={props.imageSource}/>
                        <Text style={styles.txtTitle}>{props.title}</Text>
                    </View>
                </Animated.View>
            </GestureDetector>
        )
    }
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPress} style={[styles.item, themeContainer]}>
            {itemView()}
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    item:{
        flex: 1,
        aspectRatio: 1,
        width: pxToPercentage(104),
        height: pxToPercentage(104),
        // backgroundColor: Color.primary100,
        borderRadius: pxToPercentage((24)),
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: pxToPercentage(10)
    },
    circle: {
        borderRadius: pxToPercentage((24)),
        width: pxToPercentage(100),
        height: pxToPercentage(100),
    },
    viewItem :{
        height: pxToPercentage(100),
        justifyContent: "center",
        alignItems:"center"
    },
    icon:{
        width: pxToPercentage(20),
        height: pxToPercentage(20),
        padding: pxToPercentage(2),
        justifyContent:"center"
    },
    txtTitle:{
        color: Color["Neutral/Dark Blue"],
        fontSize: pxToPercentage(11),
        ...textStyle.sfProTextRegular
    }
})