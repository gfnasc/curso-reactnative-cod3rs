import React from 'react'
import { View, StyleSheet, Platform } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer'

import Simples from './components/Simples'
import Parimpar from './components/Parimpar'
import { Inverter, MegaSena } from './components/Multi'
import Contador from './components/Contador'
import Plataforma from './components/Plataforma'

export default createDrawerNavigator({
    Plataforma: {
        screen: () => <Plataforma></Plataforma>
    },
    Contador: {
        screen: () => <Contador numero={8}></Contador>,
        navigationOptions: { title: 'Contador' }
    },
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