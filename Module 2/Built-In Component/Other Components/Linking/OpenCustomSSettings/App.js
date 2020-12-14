import React, { useCallback } from "react";
import { Button, Linking, StyleSheet, View } from "react-native";

const OpenSettingsButton = ({ children }) => {
  const handlePress = useCallback(async () => {
    // Open the custom settings if the app has one
    await Linking.openSettings();
  }, []);

  return <Button title={children} onPress={handlePress} />;
};

const App = () => {
  return (
    <View style={styles.container}>
      <OpenSettingsButton>Open Settings</OpenSettingsButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default App;
