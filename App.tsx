
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Chart from './apps/components/Chart';
import Header from './apps/components/Header';
import UserList from './apps/screens/UserList';
import { createStore } from './apps/models/setup-root-store';
import { RootStoreProvider } from './apps/models/root-store-context';

const store = createStore();

export default function App() {
  return (
    <RootStoreProvider value={store}>
      <View style={styles.container}>
        <UserList />
      </View>
    </RootStoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10
  },
  header: {
    flex: 0.5,
  },
  banner: {
    flex: 2,
  },
  list: {
    flex: 3.5,
  }
});
