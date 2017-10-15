import React from 'react';
import PropTypes from 'prop-types';
import { Platform, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { black, white, gray } from '../utils/colors';

const DesksTabBarIcon = ({ tintColor }) => (
  <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
);
DesksTabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

const NewDeskTabBarIcon = ({ tintColor }) => (
  <FontAwesome name="plus-square" size={30} color={tintColor} />
);
NewDeskTabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default TabNavigator(
  {
    Desks: {
      screen: () => <View />,
      navigationOptions: {
        tabBarLabel: 'Desks',
        tabBarIcon: DesksTabBarIcon,
      },
    },
    NewDesk: {
      screen: () => <View />,
      navigationOptions: {
        tabBarLabel: 'New desk',
        tabBarIcon: NewDeskTabBarIcon,
      },
    },
  },
  {
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      activeTintColor: black,
      inactiveTintColor: Platform.OS === 'ios' ? gray : black,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : white,
      },
    },
  },
);
