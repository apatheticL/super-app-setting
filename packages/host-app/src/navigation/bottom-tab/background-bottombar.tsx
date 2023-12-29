import {ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ImagesSource} from '../../assets/images';
import {
  deviceWidth,
  heightPxToPercentage,
  pxToPercentage,
  widthPxToPercentage,
} from '../../core/utils';
export const BackgroundBottomTab = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.viewBottomBar, {marginBottom: insets.bottom}]}>
      <View style={styles.hideLeft} />
      <View style={styles.hideRight} />
      <ImageBackground
        style={styles.bgBottomBar}
        source={ImagesSource.backgroundBottomBar}>
        <View style={styles.fontRight} />
        <View style={styles.fontLeft} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bgBottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: deviceWidth,
    height: heightPxToPercentage(80),
    // backgroundColor: 'white',
    overflow: 'hidden',
    bottom: -4,
    position: 'absolute',
  },
  viewBottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: deviceWidth,
    height: heightPxToPercentage(80),
    // backgroundColor: 'white',
    // overflow: 'visible',
    bottom: 0,
    position: 'absolute',
  },
  fontRight: {
    width: '10%',
    height: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: heightPxToPercentage(80) / 12,
  },
  fontLeft: {
    width: '10%',
    height: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: heightPxToPercentage(80) / 12,
    right: 0,
  },
  hideLeft: {
    width: widthPxToPercentage(15),
    height: '100%',
    backgroundColor: '#1A1F52',
    position: 'absolute',
    top: heightPxToPercentage(0),
    opacity: 0.03,
  },
  hideRight: {
    width: widthPxToPercentage(15),
    height: '100%',
    backgroundColor: '#1A1F52',
    position: 'absolute',
    top: heightPxToPercentage(0),
    right: 0,
    opacity: 0.03,
  },
});
