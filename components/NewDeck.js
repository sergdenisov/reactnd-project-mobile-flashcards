import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation'
import { black, lightGray, transparent } from '../utils/colors';
import { addDeck } from '../actions';

const styles = StyleSheet.create({
  view: {
    paddingVertical: 50,
    paddingHorizontal: 50,
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 40,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});

const initialState = {
  title: '',
};

class NewDeck extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      addDeck: PropTypes.func.isRequired,
    }).isRequired,
    navigation: PropTypes.shape({
      dispatch: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = initialState;

  submit = () => {
    const { actions, navigation } = this.props;
    const { title } = this.state;

    actions.addDeck({ title, questions: [] });
    this.setState(initialState);
    navigation.dispatch(NavigationActions.back({ key: 'NewDeck' }));
  };

  render() {
    const { title } = this.state;

    return (
      <View style={styles.view}>
        <Text style={styles.header}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          value={title}
          placeholder="Deck Title"
          placeholderTextColor={lightGray}
          underlineColorAndroid={transparent}
          onChangeText={newTitle => this.setState({ title: newTitle })}
        />
        <Button title="Submit" onPress={this.submit} />
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addDeck }, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(NewDeck);
