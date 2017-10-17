import { StackNavigator } from 'react-navigation';
import Tabs from './Tabs';
import { white, black } from '../utils/colors';
import Deck from './Deck';

export default StackNavigator(
  {
    Home: {
      screen: Tabs,
    },
    Deck: {
      screen: Deck,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: { backgroundColor: black },
      },
    },
  },
  {
    cardStyle: { backgroundColor: white },
  },
);
