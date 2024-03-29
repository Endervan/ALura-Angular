import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Principal from './telas/Principal';
import Login from './telas/Login';
import Configuracao from './telas/Configuracao';
import Resumo from "./telas/Resumo";
import Finaliza from "./telas/Finaliza";

const Tab = createNativeStackNavigator();

export default function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Tab.Screen name="Principal" component={Principal} options={{ headerShown: false }}/>
        <Tab.Screen name="Configurações" component={Configuracao} options={{ headerTitleAlign: 'center' }}/>
        <Tab.Screen name="Resumo" component={Resumo} options={{ headerTitleAlign: 'center' }}/>
        <Tab.Screen name="Finaliza" component={Finaliza} options={{ headerTitleAlign: 'center' }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
