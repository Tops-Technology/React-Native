import React, { Component } from 'react';
 
import { StyleSheet, Platform, View, Text } from 'react-native';

import PropTypes from 'prop-types';

class User extends Component {

  render() {

    return (

      <Text style={{fontSize : this.props.FontSize, color: this.props.FontColor}}> Hello {this.props.name} ! </Text>

    );
  }
}
 
export default class App extends Component{

  render() {

    return (
    
        <View style={styles.MainContainer}>

              <User name='Sam' FontSize = {20} FontColor= '#FF9800' />

              <User name='Pankaj' FontSize = {22} FontColor= '#03A9F4' />

              <User name='Anita' FontSize = {24} FontColor= '#FFC107' />

              <User name='Mukesh' FontSize = {26} FontColor= '#4CAF50' />
             
        </View>
              
    );
  }
}

User.propTypes =
{
  name: PropTypes.string,
  FontSize: PropTypes.number,
  FontColor: PropTypes.string,
  
}
 
User.defaultProps =
{
  name: "Default Name",
  FontColor: "#00E676",
  FontSize: 15,
}
    
const styles = StyleSheet.create({
    
 MainContainer :{
 
  flex:1,
  paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
  alignItems: 'center',
  justifyContent: 'center',
    
  }

});