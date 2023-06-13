import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import useTextos from '../../../hooks/useTextos';
import Texto from '../../../componentes/Texto';
import {useNavigation, useRoute} from "@react-navigation/native";
import VoltarSVG from "../../../assets/voltar.svg";
import ResumoSvg from "../../../assets/resumo.svg";

const ALTURA_PADRAO = 350;
const largura = Dimensions.get('screen').width;

export default function Parabens() {
    const navigation = useNavigation();
    const route = useRoute();
    const {pedido, mensagemCompra, Parabens, VoltaHome, VoltaProdutor} = useTextos();


    const nomeCompra = route.params?.compra.nome;
    const timestampCompra = route.params?.compra.timestamp;
    const mensagemCompleta = mensagemCompra?.replace('$NOME', nomeCompra)


    return <>

        <View style={estilos.topo}>
            <TouchableOpacity
                style={estilos.botaoVoltar}
                onPress={()=>{navigation.goBack()}}
            >
                <VoltarSVG/>
            </TouchableOpacity>
            <Text style={estilos.titulo}>{pedido}</Text>
        </View>

        <ResumoSvg width={largura} color='white' style={estilos.resumo}/>

        <View style={estilos.view}>
            <Texto style={estilos.parabens}>{Parabens}</Texto>
            {timestampCompra &&
                <Texto style={estilos.descricao}>{mensagemCompleta}</Texto>
            }
            <TouchableOpacity
                style={estilos.botaoHome}
                onPress={()=>navigation.popToTop()}
            >
                <Texto style={estilos.textoBotao}>{VoltaHome}</Texto>
            </TouchableOpacity>

            <TouchableOpacity
                style={estilos.botaoProdutor}
                onPress={()=>navigation.pop(2)}
            >
                <Texto style={estilos.textoBotaoP}>{VoltaProdutor}</Texto>
            </TouchableOpacity>
        </View>

    </>
}

const estilos = StyleSheet.create({
    view: {
        marginHorizontal: 10,
        marginVertical:10,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
        padding: 16,
        color: '#464646',
    },
    topo: {
        backgroundColor: 'red',
        // Android
        elevation: 4,
        zIndex:99

    },
    parabens: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#464646',
        lineHeight: 42
    },
    botaoVoltar: {
        position: 'absolute',
        padding: 17,
        width: 24,
        height: 24,
        color: '#464646',
    },
    voltar: {
        width: 24,
        height: 24,
    },
    resumo: {
        width: '100%',
        marginTop:60,
        height: ALTURA_PADRAO,
    },
    descricao: {
        fontWeight: 'normal',
        fontSize: 16,
        color: '#A3A3A3',
        lineHeight: 26
    },
    botaoHome: {
        marginTop: 16,
        borderRadius: 6,
        padding: 16,
        backgroundColor: '#2A9F85'
    },
    textoBotao: {
        textAlign: 'center',
        fontSize: 26,
        color: '#fff',
        lineHeight: 42,
        fontWeight: 'bold',
    },
    textoBotaoP: {
        textAlign: 'center',
        fontSize: 26,
        color: '#000',
        lineHeight: 42,
        fontWeight: 'bold',
    },
    botaoProdutor: {
        marginTop: 16,
        borderRadius: 6,
        padding: 16,
        backgroundColor: '#ECECEC'
    }

})

