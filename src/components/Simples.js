import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Padrao from '../styles/Padrao'

export default (props) => {
    return (
        <View>
            <Text style={Padrao.ex}>{props.texto}</Text>
        </View>
    );
}
