import React from 'react';  
import { View, TextInput } from "react-native";

class App extends React.Component {  
  constructor(props){  
    super(props);  
    this.state = {  
         name: "" 
      }  
    this.handleChange = this.handleChange.bind(this);  
  }
  handleChange(text){
    this.setState({ name: text })
    console.log(this.props);  
  }  
  render() {  
    return (  
    <View>
      <TextInput 
      	value={this.state.name} 
  		onChangeText={(text) =>this.handleChange(text)}
      />
    </View>  
    )} 
}  
export default App;  