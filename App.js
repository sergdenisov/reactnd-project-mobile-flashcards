import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import CustomStatusBar from './components/CustomStatusBar';
import Tabs from './components/Tabs';

const store = createStore(reducer, compose(applyMiddleware(thunk)));

const styles = StyleSheet.create({
  app: { flex: 1 },
});

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.app}>
        <CustomStatusBar />
        <Tabs />
      </View>
    </Provider>
  );
}
