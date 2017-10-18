import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { black, lightGray, transparent } from '../utils/colors';
import { changeDeck } from '../actions';

const styles = StyleSheet.create({
  view: {
    paddingVertical: 50,
    paddingHorizontal: 50,
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  separator: {
    marginTop: 50,
  },
});

const initialState = { question: '', answer: '' };

class AddCard extends Component {
  static propTypes = {
    deck: PropTypes.shape({
      title: PropTypes.string.isRequired,
      cards: PropTypes.array.isRequired,
    }).isRequired,
    actions: PropTypes.shape({
      changeDeck: PropTypes.func.isRequired,
    }).isRequired,
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }).isRequired,
  };

  static navigationOptions = () => ({ title: 'Add Card' });

  state = initialState;

  submit = () => {
    const { deck, actions, navigation } = this.props;
    const { question, answer } = this.state;
    const changedDeck = { ...deck };

    changedDeck.cards.push({ question, answer });
    actions.changeDeck(changedDeck);
    this.setState(initialState);
    navigation.goBack();
  };

  render() {
    const { question, answer } = this.state;

    return (
      <View style={styles.view}>
        <TextInput
          style={styles.input}
          value={question}
          placeholder="Question"
          placeholderTextColor={lightGray}
          underlineColorAndroid={transparent}
          onChangeText={newQuestion => this.setState({ question: newQuestion })}
        />
        <TextInput
          style={[styles.input, styles.separator]}
          value={answer}
          placeholder="Answer"
          placeholderTextColor={lightGray}
          underlineColorAndroid={transparent}
          onChangeText={newAnswer => this.setState({ answer: newAnswer })}
        />
        <View style={styles.separator}>
          <Button title="Submit" onPress={this.submit} />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state, { navigation }) {
  const { deck } = navigation.state.params;

  return { deck };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ changeDeck }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);
