import { StackNavigator } from 'react-navigation';
import Tabs from './Tabs';
import { white, black } from '../utils/colors';
import Deck from './Deck';
import AddCard from './AddCard';

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
    AddCard: {
      screen: AddCard,
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
