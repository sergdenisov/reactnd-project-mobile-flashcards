import React from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { black, white, lightGray } from '../utils/colors';
import Decks from './Decks';
import NewDeck from './NewDeck';

const DecksTabBarIcon = ({ tintColor }) => (
  <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
);
DecksTabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

const NewDeckTabBarIcon = ({ tintColor }) => (
  <FontAwesome name="plus-square" size={30} color={tintColor} />
);
NewDeckTabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default TabNavigator(
  {
    Decks: {
      screen: Decks,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: DecksTabBarIcon,
      },
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'New deck',
        tabBarIcon: NewDeckTabBarIcon,
      },
    },
  },
  {
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      activeTintColor: black,
      inactiveTintColor: Platform.OS === 'ios' ? lightGray : black,
      style: {
        height: 56,
        backgroundColor: white,
      },
    },
  },
);
