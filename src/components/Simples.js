import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default (props) => {
    return (
        <View>
            <Text style={styles.f20}>{props.texto}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    f20: {
        fontSize: 40
    }
});
