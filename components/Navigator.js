import { StackNavigator } from 'react-navigation';
import Tabs from './Tabs';
import { white, black } from '../utils/colors';
import Deck from './Deck';
import AddCard from './AddCard';
import Quiz from './Quiz';

const navigationOptions = {
  headerTintColor: white,
  headerStyle: { backgroundColor: black },
};

export default StackNavigator(
  {
    Home: { screen: Tabs },
    Deck: { screen: Deck, navigationOptions },
    AddCard: { screen: AddCard, navigationOptions },
    Quiz: { screen: Quiz, navigationOptions },
  },
  { cardStyle: { backgroundColor: white } },
);
