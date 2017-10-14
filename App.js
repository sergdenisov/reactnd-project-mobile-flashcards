import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomStatusBar from './components/CustomStatusBar';
import Tabs from './components/Tabs';

const styles = StyleSheet.create({
  app: { flex: 1 },
});

export default function App() {
  return (
    <View style={styles.app}>
      <CustomStatusBar />
      <Tabs />
    </View>
  );
}
