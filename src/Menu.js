import React from 'react'
import { View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer'

import Simples from './components/Simples'
import Parimpar from './components/Parimpar'
import { Inverter, MegaSena } from './components/Multi'

export default createDrawerNavigator({
    MegaSena: {
        screen: () => <MegaSena></MegaSena>,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto="Javascript ES6"></Inverter>
    },
    ParImpar: {
        screen: () => <Parimpar ></Parimpar>,
        navigationOptions: { title: 'Par Impar' }
    },
    Simples: {
        screen: () => <Simples texto="Simples"></Simples>,
    }
}, { drawerWidth: 300 })