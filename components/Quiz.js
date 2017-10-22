import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { lightBlack, red, green, purple } from '../utils/colors';
import * as api from '../utils/api';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 50,
  },
  card: { flex: 1 },
  cardTextView: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    alignSelf: 'stretch',
    textAlign: 'center',
    color: lightBlack,
  },
  flipButton: {
    color: red,
  },
  header: {
    fontSize: 40,
  },
  separatedItem: {
    marginTop: 10,
  },
});

const initialState = {
  isOver: false,
  index: 0,
  correctAnswersNumber: 0,
  isFlipped: false,
};

class Quiz extends Component {
  static propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object).isRequired,
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }).isRequired,
  };

  static navigationOptions = () => ({ title: 'Quiz' });

  state = initialState;

  flipCard = () => {
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  };

  handleAnswer = isCorrect => {
    this.setState((prevState, props) => {
      const { cards } = props;
      const isOver = prevState.index === cards.length - 1;

      if (isOver) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(9);
        tomorrow.setMinutes(0);

        api
          .clearLocalNotification()
          .then(() => api.setLocalNotification(tomorrow));
      }

      return {
        isOver,
        index: prevState.index + (isOver ? 0 : 1),
        correctAnswersNumber:
          prevState.correctAnswersNumber + (isCorrect ? 1 : 0),
        isFlipped: false,
      };
    });
  };

  restart = () => this.setState(initialState);

  render() {
    const { cards, navigation } = this.props;
    const { isOver, index, correctAnswersNumber, isFlipped } = this.state;
    const card = cards[index];

    if (isOver) {
      const correctAnswersPercent = Math.round(
        correctAnswersNumber / cards.length * 100,
      );

      return (
        <View style={styles.view}>
          <View style={styles.cardTextView}>
            <Text style={[styles.text, styles.header]}>
              {`Results: ${correctAnswersPercent}% of correct answers`}
            </Text>
          </View>
          <Button title="Back to Deck" onPress={() => navigation.goBack()} />
          <View style={styles.separatedItem}>
            <Button
              title="Restart Quiz"
              color={purple}
              onPress={this.restart}
            />
          </View>
        </View>
      );
    }

    const renderCardSide = (text, flipButtonText) => (
      <View style={styles.card}>
        <Text style={styles.text}>{`${index + 1} / ${cards.length}`}</Text>
        <TouchableOpacity style={styles.cardTextView} onPress={this.flipCard}>
          <Text style={[styles.text, styles.header]}>{text}</Text>
          <Text style={[styles.text, styles.flipButton, styles.separatedItem]}>
            {flipButtonText}
          </Text>
        </TouchableOpacity>
        <Button
          title="Correct"
          color={green}
          onPress={() => this.handleAnswer(true)}
        />
        <View style={styles.separatedItem}>
          <Button
            title="Incorrect"
            color={red}
            onPress={() => this.handleAnswer(false)}
          />
        </View>
      </View>
    );

    return (
      <View style={styles.view}>
        {!isFlipped && renderCardSide(card.question, 'Show answer')}
        {isFlipped && renderCardSide(card.answer, 'Show question')}
      </View>
    );
  }
}

function mapStateToProps(state, { navigation }) {
  const { cards } = navigation.state.params;

  return { cards };
}

export default connect(mapStateToProps)(Quiz);
