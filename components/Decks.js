import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
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
  };

  componentDidMount() {
    this.props.actions.getDecks();
  }

  render() {
    const { decks } = this.props;

    return (
      <ScrollView>
        {decks.map(deck => (
          <View key={deck.title} style={styles.deck}>
            <Text style={styles.title}>{deck.title}</Text>
            <Text style={styles.questions}>{deck.questions.length} cards</Text>
          </View>
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
