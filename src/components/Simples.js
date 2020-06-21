import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Padrao from '../styles/Padrao'
import Parimpar from './Parimpar'
import { Inverter, MegaSena } from './Multi'

export default (props) => {
    return (
        <View>
            <Text style={Padrao.ex}>{props.texto}</Text>
            <Parimpar numero={33}></Parimpar>
            <Inverter texto="React Native"></Inverter>
            <MegaSena></MegaSena>
        </View>
    );
}
