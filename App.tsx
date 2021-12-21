
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Chart from './apps/components/Chart';
import Header from './apps/components/Header';
import ListItem from './apps/components/ListItem';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.banner}>
        <Chart />
      </View>
      <View style={styles.list}>
        <ListItem />
      </View>
    </View>
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
