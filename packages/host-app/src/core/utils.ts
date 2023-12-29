import {Dimensions} from 'react-native';
export const deviceHeight = Dimensions.get('screen').height;

export const deviceWidth = Dimensions.get('window').width;
const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');
const percentageWidth: number = width / 375;
const percentageHeight: number = height / 812;
const percentageWidthOld: number = width / 414;
// size for new design (July2023)
export const widthPxToPercentage = (value: number): number => {
  return percentageWidth * value;
};
export const pxToPercentage = (value: number): number => {
  return percentageWidthOld * value;
};
export const heightPxToPercentage = (value: number): number => {
  return percentageHeight * value;
};
