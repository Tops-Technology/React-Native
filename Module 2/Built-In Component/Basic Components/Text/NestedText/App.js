import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BoldAndBeautiful = () => {
  return (
    <Text style={styles.baseText}>
      I am bold
      <Text style={styles.innerText}> and red</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold'
  },
  innerText: {
    color: 'red'
  }
});

export default BoldAndBeautiful;
