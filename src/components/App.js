import React from 'react';
import { View, StyleSheet } from 'react-native';

import Simples from './Simples'
import Parimpar from './Parimpar'
import { Inverter, MegaSena } from './Multi'

export default function App() {
  return (
    <View style={styles.container}>
      <Simples texto="Simples!"></Simples>
      <Parimpar numero={33}></Parimpar>
      <Inverter texto="React Native"></Inverter>
      <MegaSena numeros={8}></MegaSena>
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