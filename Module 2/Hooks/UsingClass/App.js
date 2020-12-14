import React, { useState } from "react";
import { Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [videogames, setVideogames] = useState([
    { id: 1, name: "Playstation" },
    { id: 2, name: "Atari" },
    { id: 3, name: "Xbox" }
  ]);
  const [inputVideoGame, setInputVideoGame] = useState("");

  function addItem() {
    setVideogames([...videogames, { id: Math.random(), name: inputVideoGame }]);
    //cleaning the input text
    setInputVideoGame("");
  }
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View>
        <TextInput
          style={{ borderColor: "#ccc", borderWidth: 1, marginVertical: 10 }}
          placeholder="Type a Videogame name here"
          onChangeText={value => setInputVideoGame(value)}
          value={inputVideoGame}
        />
        <Button title="Add Item" onPress={addItem} />
      </View>
      <View style={{ marginTop: 20 }}>
        {videogames.map(item => (
          <Text style={{ fontSize: 24 }} key={item.id}>
            {item.name}
          </Text>
        ))}
      </View>
    </View>
  );
}