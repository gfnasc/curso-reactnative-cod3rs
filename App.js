import React from 'react';
import { View, StyleSheet } from 'react-native';
import Simples from './src/components/Simples'

export default function App() {
  return (
    <View style={styles.container}>
      <Simples></Simples>
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  }
});