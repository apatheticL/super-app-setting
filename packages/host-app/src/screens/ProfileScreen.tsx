import React from 'react';
import {Text, View} from 'react-native';

const ProfileScreen = () => {
    const items = [1,2,3,4,5,6,7,8,9,10]
  return (
    <View>
        {items.map((item, index) => {
            return <Text key={index}>{item}</Text>
        })}
    </View>
  );
};
export default ProfileScreen;
