import React, { Component } from 'react';
 
import { Platform, StyleSheet, View, TextInput } from 'react-native';
 
export default class App extends Component{
 
  render() {
 
    return (
    
        <View style={styles.MainContainer}>


         <TextInput
            style={styles.TextInputStyleClass}
            underlineColorAndroid="transparent"
            placeholder={"Type Something in Text Area."}
            placeholderTextColor={"#9E9E9E"}
            numberOfLines={10}
            multiline={true}
          />

        </View>
              
    );
  }
}
    
const styles = StyleSheet.create({
    
 MainContainer :{
 
  flex:1,
  paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
  justifyContent: 'center',
  margin:20
    
  },
 
  TextInputStyleClass:{

    textAlign: 'center',
    height: 150,
    borderWidth: 2,
    borderColor: '#9E9E9E',
    borderRadius: 20 ,
    backgroundColor : "#FFFFFF"
    }
 
});