import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Principal from './paginas/Principal';
import Repositorios from './paginas/Repositorios';
import CriarRepositorio from './paginas/CriarRepositorio';
import InfoRepositorio from './paginas/InfoRepositorio';

const Tab = createNativeStackNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Principal" options={{ title: "Perfil" }} component={Principal} />
                <Tab.Screen name="Repositorios" component={Repositorios} />
                <Tab.Screen name="CriarRepositorio" options={{ title: "Criar Repositório" }} component={CriarRepositorio} />
                <Tab.Screen name="InfoRepositorio" options={{ title: "Repositório Info" }} component={InfoRepositorio} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
