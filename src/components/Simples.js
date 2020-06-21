import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default () => {
    return (
        <View>
            <Text style={styles.f20}>Simples</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    f20: {
        fontSize: 40
    }
});
