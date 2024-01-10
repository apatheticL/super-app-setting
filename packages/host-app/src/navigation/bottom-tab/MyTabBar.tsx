import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {IconSources} from '../../assets/icons';
import {BackgroundBottomTab} from './background-bottombar';
export function MyTabBar ({state, descriptors, navigation}) {
  return (
    <View style={{flexDirection: 'row'}}>
      <BackgroundBottomTab />
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        let icon;
        switch (index) {
          case 0: {
            icon = isFocused
              ? IconSources.bottomBar.homeActive
              : IconSources.bottomBar.homeInactive;
            break;
          }
          case 1: {
            icon = isFocused
              ? IconSources.bottomBar.marketActive
              : IconSources.bottomBar.marketInActive;
            break;
          }
          case 2: {
            icon = isFocused
              ? IconSources.bottomBar.personActive
              : IconSources.bottomBar.personInactive;
            break;
          }
        }
        const onPress = () => {
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

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            key={index}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 8,
            }}>
            <Image
              resizeMode={'contain'}
              style={styles.iconNavScan}
              source={icon}
            />

            <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  iconNavScan: {
    width: 27,
    height: 27,
  },
});
