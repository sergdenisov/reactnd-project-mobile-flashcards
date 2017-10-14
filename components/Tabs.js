import React from 'react';
import PropTypes from 'prop-types';
import { Platform, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { purple, white } from '../utils/colors';

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
      activeTintColor: Platform.OS === 'ios' ? purple : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : purple,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      },
    },
  },
);
