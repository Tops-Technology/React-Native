import React, { Component } from 'react';
import { TouchableOpacity, View, ActivityIndicator, Text, Alert} from 'react-native';
export default class App extends Component {
handlePress = async () => {
  fetch('https://data.advance88.hasura-app.io/v1/query', { //add your link
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          "type": "select",
    "args": {
        "table": "author",
        "columns": [
            "name"
        ],
        "limit": "1"
    }
      })
})
    .then((response) => response.json())
    .then((responseJson) => {
 Alert.alert("Author name at 0th index:  " + responseJson[0].name);
    })
    .catch((error) => {
      console.error(error);
    });
}
  render(){
  return(
   <View style={{paddingTop: 50, paddingLeft: 50 }}>
   <Text> Some other text </Text>
    <Text> Some other text </Text>
    <TouchableOpacity onPress={this.handlePress.bind(this)}>
     <Text style={{paddingTop: 50, paddingLeft: 50, color: '#FF0000'}}> Click me to see the name </Text>
    </TouchableOpacity>
</View> 
  );
}
}