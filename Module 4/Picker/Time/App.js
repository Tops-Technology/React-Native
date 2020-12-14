import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import TimePicker from 'react-native-simple-time-picker';

const App = () => {
  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>
          React Native Time Picker –
          To Pick the Time using Native Time Picker
        </Text>
        <Text>
          Selected Time: {selectedHours}:{selectedMinutes}
        </Text>
        <TimePicker
          selectedHours={selectedHours}
          //initial Hourse value
          selectedMinutes={selectedMinutes}
          //initial Minutes value
          onChange={(hours, minutes) => {
            setSelectedHours(hours);
            setSelectedMinutes(minutes);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
});