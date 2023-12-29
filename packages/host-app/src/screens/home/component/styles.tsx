import {StyleSheet} from "react-native";
import {pxToPercentage} from "../../../core/utils";
import {Color} from "../../../core/color";

export  const styleHome = StyleSheet.create({
    viewContainerMenu:{
        height: pxToPercentage(360),
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    defaultThemeContainer: {
        backgroundColor: Color["Purple/100"],
    },
    tealThemeContainer: {
        backgroundColor: Color["Teal/100"],
    },
    grayThemeContainer: {
        backgroundColor: Color["Grey/100"],
    },
})