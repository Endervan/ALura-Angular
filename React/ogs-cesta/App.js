import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {Montserrat_400Regular, Montserrat_700Bold, useFonts,} from '@expo-google-fonts/montserrat';

import Cesta from './src/telas/Cesta';
import mock from './src/mocks/Cesta';

export default function App() {
    const [fonteCarregada] = useFonts({
        "MontserratRegular": Montserrat_400Regular,
        "MontserratBold": Montserrat_700Bold,
    });

    if (!fonteCarregada) {
        return <View/>
    }

    return (
        <SafeAreaView>
            <StatusBar/>
            <Cesta {...mock} />{/*/!* msm efeito linha abaixo*!/*/}
            {/*<Cesta topo={mock.topo} detalhes={mock.detalhes}/>*/}
        </SafeAreaView>
    );
}
