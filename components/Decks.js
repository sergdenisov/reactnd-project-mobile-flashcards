import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { gray, lightBlack } from '../utils/colors';
import { getDecks } from '../actions';

const styles = StyleSheet.create({
  deck: {
    paddingVertical: 50,
    borderBottomColor: gray,
    borderBottomWidth: 2,
  },
  title: {
    alignSelf: 'stretch',
    textAlign: 'center',
    fontSize: 30,
    color: lightBlack,
  },
  questions: {
    alignSelf: 'stretch',
    textAlign: 'center',
    fontSize: 20,
    color: gray,
    marginTop: 5,
  },
});

class Decks extends Component {
  static propTypes = {
    decks: PropTypes.arrayOf(PropTypes.object).isRequired,
    actions: PropTypes.shape({
      getDecks: PropTypes.func.isRequired,
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    this.props.actions.getDecks();
  }

  render() {
    const { decks, navigation } = this.props;

    return (
      <ScrollView>
        {decks.map(deck => (
          <TouchableOpacity
            key={deck.title}
            style={styles.deck}
            onPress={() => navigation.navigate('Deck', { deck })}>
            <Text style={styles.title}>{deck.title}</Text>
            <Text style={styles.questions}>{deck.questions.length} cards</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

function mapStateToProps({ decks }) {
  return { decks };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getDecks }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Decks);
