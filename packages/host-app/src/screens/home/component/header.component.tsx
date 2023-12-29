import React, {FunctionComponent} from "react";
import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {ImageCircleComponent} from "../../../components/image.circle.component";
import {pxToPercentage} from "../../../core/utils";
import {Color} from "../../../core/color";
import {IconComponent} from "../../../components/icon.component";
import {ImagesSource} from "../../../assets/images";
import {withTiming} from "react-native-reanimated";
interface HeaderProps{
    avatarUrl:string,
    title: string,
    subtitle: string,
    unreadNoti: number,
    onNotificationPress:()=> void,
}
export const HeaderComponent : FunctionComponent<HeaderProps>=(props)=>{
    const BellNotification = () => {
        return (
            <Pressable style={styles.containerBellNotification} onPress={props.onNotificationPress}>
                <Image source={ImagesSource.bellNotification} style={styles.icon} />
                {props.unreadNoti > 0 && (
                    <View style={styles.containerCountBell}>
                        <Text style={styles.countBell}>{props.unreadNoti}</Text>
                    </View>
                )}
            </Pressable>
        );
    };
    return (
        <View style={styles.viewContainer}>
            {ImageCircleComponent({uri: props.avatarUrl},styles.image )}
            <View style={{flex: 1}}>
                <Text style={styles.txtTitle}>{props.title}</Text>
                <Text>{props.subtitle}</Text>
            </View>
            {BellNotification()}
        </View>
    )
}
const  styles = StyleSheet.create({
    icon: { flex: 1, resizeMode: 'contain' },
    viewContainer:{
        flexDirection:'row',
        width: "100%",
        alignItems:"center",
        paddingVertical: pxToPercentage(16)

    },
    containerCountBell: {
        position: 'absolute',
        top: -pxToPercentage(3),
        right: -pxToPercentage(3),
        width: pxToPercentage(16),
        aspectRatio: 1,
        borderRadius: 45,
        paddingBottom: pxToPercentage(1),
        justifyContent: 'center',
        backgroundColor: '#DC2525',
        alignItems: 'center',
    },
    countBell: {
        fontWeight: '500',
        color: 'white',
        fontSize: pxToPercentage(10),
    },
    containerBellNotification: {
        padding: pxToPercentage(8),
        borderRadius: 45,
        width: pxToPercentage(44),
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width: pxToPercentage(52),
        height: pxToPercentage(52),
        marginRight: pxToPercentage(8)
    },
    txtTitle:{
        color: Color["Neutral/Dark Blue"],
        fontSize: pxToPercentage(16),

    }

})