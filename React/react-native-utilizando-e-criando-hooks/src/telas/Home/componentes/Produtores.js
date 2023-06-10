import React, {useEffect} from 'react';
import {StyleSheet, Text} from "react-native";
import {carregaProdutores} from "../../../service/carregaDados";


export default function Produtores() {
    useEffect(() => {
        const retorno = carregaProdutores();
        console.log(retorno)
    }, []);//array vazio fica parecindo com life ciclo componentDidMount qnd usa classe

    return <Text>Produtores</Text>

}


const estilos = StyleSheet.create({
    topo: {},

});
