import {Image, ImageProps, ImageSourcePropType, ImageStyle, StyleProp} from "react-native";
import React from "react";
import {pxToPercentage} from "../core/utils";

export const  IconComponent = (  source: ImageSourcePropType,
    style: StyleProp<ImageStyle>): React.ReactElement<ImageProps> => {
    return <Image resizeMode={'contain'} style={style} source={source} />;
};