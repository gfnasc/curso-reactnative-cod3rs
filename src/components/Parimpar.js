import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../styles/Padrao'

function parImpar(num){
    const v = num % 2 == 0 ? 'Par' : 'Impar'
    return <Text style={Padrao.ex}>{v}</Text>
}

export default (props) => {
    return (
        <View>
            {parImpar(props.numero)}
        </View>
    )
}