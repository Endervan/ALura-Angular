import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native';
import Cestas from "./telas/Cestas";

export default function App() {
    return (
        <SafeAreaView>
            <StatusBar></StatusBar>
            <Cestas></Cestas>
        </SafeAreaView>
    );
}

