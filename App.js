import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import * as api from './utils/api';
import CustomStatusBar from './components/CustomStatusBar';
import Navigator from './components/Navigator';

const store = createStore(reducer, compose(applyMiddleware(thunk)));

const styles = StyleSheet.create({
  app: { flex: 1 },
});

export default class App extends Component {
  componentDidMount() {
    const today = new Date();
    today.setMinutes(today.getMinutes() + 1);

    api.setLocalNotification(today);
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.app}>
          <CustomStatusBar />
          <Navigator />
        </View>
      </Provider>
    );
  }
}
