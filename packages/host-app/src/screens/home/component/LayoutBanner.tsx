import React, {FC} from "react";
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ImagesSource} from "../../../assets/images";
import {Color} from "../../../core/color";
import {pxToPercentage} from "../../../core/utils";
import {textStyle} from "../../../components/TextStyle";
import {ButtonComponent} from "../../../components/button.component";

interface LayoutBannerProps {
    onPress: () => void;
}

export const LayoutBanner: FC<LayoutBannerProps> = (props) => {
    return (
        <ImageBackground style={styles.container} source={ImagesSource.backgroundFace3D}>
            <Text style={styles.txtTitle}>Giáng sinh an lành</Text>
            <Text style={styles.txtSubTitle}>Cùng chúng tôi khám phá những ưu đãi mới nhé</Text>

            <ButtonComponent title={"Khám phá ngay"} onPress={props.onPress}/>

        </ImageBackground>
    )
};
const styles = StyleSheet.create({
    txtTitle:{
        ...textStyle.sfProTextBold,
        fontSize: pxToPercentage(18),
        color: Color.White
    },
    txtSubTitle:{
        ...textStyle.sfProTextRegular,
        fontSize: pxToPercentage(14),
        color: Color.White,
        textAlign:"center"
    },
    container: {
        flex: 1,
        width: pxToPercentage(223),
        height: pxToPercentage(340),
        alignItems: "center",
        justifyContent: "flex-end",
        paddingHorizontal: pxToPercentage(10),
        paddingVertical: pxToPercentage(20),
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Color["White"],
        borderRadius: pxToPercentage(16),
        width: '70%',
        marginTop: pxToPercentage(10),
        height: pxToPercentage(45)
    }
})