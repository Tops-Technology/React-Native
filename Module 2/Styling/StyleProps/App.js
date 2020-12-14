import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component<Props> {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#fff',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 200,
            height: 150,
            backgroundColor: 'red',
            padding: 10,
          }}>
          <Text style={{fontSize: 20, color: '#666'}}>
            Styled with style props
          </Text>
        </View>
      </View>
    );
  }
}
