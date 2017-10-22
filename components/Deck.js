import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { lightBlack, gray, purple } from '../utils/colors';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingBottom: 50,
    paddingHorizontal: 50,
  },
  deck: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'stretch',
    textAlign: 'center',
    fontSize: 40,
    color: lightBlack,
  },
  cards: {
    alignSelf: 'stretch',
    textAlign: 'center',
    fontSize: 25,
    color: gray,
    marginTop: 5,
  },
  separatedButton: {
    marginTop: 10,
  },
});

const Deck = props => {
  const { deck, navigation } = props;
  const { cards } = deck;

  return (
    <View style={styles.view}>
      <View style={styles.deck}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.cards}>{cards.length} cards</Text>
      </View>
      <Button
        title="Add Card"
        onPress={() => navigation.navigate('AddCard', { deck })}
      />
      <View style={styles.separatedButton}>
        <Button
          color={purple}
          disabled={!cards.length}
          title="Start Quiz"
          onPress={() => navigation.navigate('Quiz', { cards })}
        />
      </View>
    </View>
  );
};

Deck.propTypes = {
  deck: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

Deck.navigationOptions = ({ navigation }) => {
  const { deck } = navigation.state.params;

  return { title: deck.title };
};

function mapStateToProps({ decks }, { navigation }) {
  const { title } = navigation.state.params.deck;
  const deck = decks.find(item => item.title === title);

  return { deck };
}

export default connect(mapStateToProps)(Deck);
