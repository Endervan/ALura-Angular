import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";
import topo from "../assets/topo.png"
import logo from "../assets/logo.png"

const width = Dimensions.get('screen').width;


export default function Cestas() {
    return <>
        <Image source={topo} style={estilos.topo}></Image>
        <Text style={estilos.titulo}>Detalhe da Cesta</Text>

        <View style={estilos.cesta}>
            <Text style={estilos.nome}>Cestas de Verduras</Text>

            <View style={estilos.Fazenda}>
                <Image source={logo} style={estilos.imagemFazenda}></Image>
                <Text style={estilos.nomeFazenda}>Fazenda Feliz</Text>
            </View>

            <Text style={estilos.descricao}>Um cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha</Text>
            <Text style={estilos.preco}>R$ 40,00</Text>
        </View>
    </>

}


const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width

    },
    titulo: {
        width: "100%",
        position: 'absolute',
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16

    },
    cesta:{
        paddingVertical:8,
        paddingHorizontal:16,
    },
    nome: {
        color:"#464646",
        fontSize:26,
        lineHeight:42,
        fontWeight: "bold"
    },
    Fazenda: {
       flexDirection:"row",
        paddingVertical:12,
    },
    imagemFazenda: {
        width:32,
        height:32,
    },
    nomeFazenda: {
        marginLeft:10,
        fontSize:16,
        lineHeight:26
    },
    descricao: {
        color:"#A3A3A3",
        fontSize:16,
        lineHeight:26
    },
    preco: {
        color:"#2A9F85",
        fontSize:26,
        fontWeight:"bold",
        lineHeight:42,
        marginTop:8
    },
})
