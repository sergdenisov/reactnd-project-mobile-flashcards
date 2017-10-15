import React from 'react';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo';
import { black } from '../utils/colors';

export default () => (
  <View style={{ backgroundColor: black, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={black} barStyle="light-content" />
  </View>
);
