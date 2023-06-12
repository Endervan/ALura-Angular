import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProdutorRotas from "./ProdutorRotas";
import MelhoresProdutoresRotas from "./MelhoresProdutoresRotas";

import CoracaoSvg from "../assets/coracao.svg";
import HomeSvg from "../assets/home.svg";

const Tab = createBottomTabNavigator();

export default function AppRotas() {
    return <NavigationContainer>
        <Tab.Navigator screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({color}) => {
                let Icon = HomeSvg;

                if (route.name === 'Melhores Produtores') {
                    Icon = CoracaoSvg;
                }

                return <Icon color={color}/>
            },
            tabBarActiveTintColor: '#2A9F85', // tabs active
            tabBarInactiveTintColor: '#C7C7C7', // outras tabs
        })}>
            <Tab.Screen name='Home' component={ProdutorRotas}/>
            <Tab.Screen name='Melhores Produtores' component={MelhoresProdutoresRotas}/>
        </Tab.Navigator>
    </NavigationContainer>
}
