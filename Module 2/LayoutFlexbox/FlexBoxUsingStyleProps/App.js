import React, {Component} from 'react';
import {Text, View} from 'react-native';
export default class App extends Component<Props> {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#fff',
          alignItems: 'stretch',
        }}>
        <View style={{flex: 1, backgroundColor: 'red'}}>
          <Text style={{fontSize: 20, color: '#fff'}}>Item number 1</Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'blue'}}>
          <Text style={{fontSize: 20, color: '#fff'}}>Item number 1</Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'purple'}}>
          <Text style={{fontSize: 20, color: '#fff'}}>Item number 1</Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'orange'}}>
          <Text style={{fontSize: 20, color: '#fff'}}>Item number 1</Text>
        </View>
      </View>
    );
  }
}
