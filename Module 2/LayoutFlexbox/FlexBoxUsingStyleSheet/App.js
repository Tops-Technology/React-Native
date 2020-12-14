import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item1}>
          <Text style={{fontSize: 20, color: '#fff'}}>Item number 1</Text>
        </View>
        <View style={styles.item2}>
          <Text style={{fontSize: 20, color: '#fff'}}>Item number 1</Text>
        </View>
        <View style={styles.item3}>
          <Text style={{fontSize: 20, color: '#fff'}}>Item number 1</Text>
        </View>
        <View style={styles.item4}>
          <Text style={{fontSize: 20, color: '#fff'}}>Item number 1</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
  item1: {
    backgroundColor: 'orange',
    flex: 1,
  },
  item2: {
    backgroundColor: 'purple',
    flex: 1,
  },
  item3: {
    backgroundColor: 'yellow',
    flex: 1,
  },
  item4: {
    backgroundColor: 'red',
    flex: 1,
  },
});
