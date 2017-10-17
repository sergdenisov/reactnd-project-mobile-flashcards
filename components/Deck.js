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
  questions: {
    alignSelf: 'stretch',
    textAlign: 'center',
    fontSize: 25,
    color: gray,
    marginTop: 5,
  },
  startQuizButton: {
    paddingTop: 10,
  },
});

const Deck = props => {
  const { deck } = props;

  return (
    <View style={styles.view}>
      <View style={styles.deck}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.questions}>{deck.questions.length} cards</Text>
      </View>
      <Button title="Add Card" onPress={() => null} />
      <View style={styles.startQuizButton}>
        <Button color={purple} title="Start Quiz" onPress={() => null} />
      </View>
    </View>
  );
};

Deck.propTypes = {
  deck: PropTypes.shape({
    title: PropTypes.string.isRequired,
    questions: PropTypes.array.isRequired,
  }).isRequired,
};

Deck.navigationOptions = ({ navigation }) => {
  const { deck } = navigation.state.params;

  return { title: deck.title };
};

function mapStateToProps(state, { navigation }) {
  const { deck } = navigation.state.params;

  return { deck };
}

export default connect(mapStateToProps)(Deck);
