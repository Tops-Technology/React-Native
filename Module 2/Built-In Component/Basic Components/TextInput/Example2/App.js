import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40}
    />
  );
}

const UselessTextInputMultiline = () => {
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
  return (
    <View
      style={{
        backgroundColor: value,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}>
      <UselessTextInput
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  );
}

export default UselessTextInputMultiline;
