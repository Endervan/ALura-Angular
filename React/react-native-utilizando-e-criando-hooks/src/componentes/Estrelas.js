import React, {useState} from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";

import estrela from '../assets/estrela.png'
import estrelaCinza from '../assets/estrelaCinza.png'

export default function Estrelas(
    {
        quantidade: quantidadeAntiga,
        editavel = false,
        grande = true
    }) {
    const [quatidade, setQuantidade] = useState(quantidadeAntiga);

    const getImagem = (index) => {
        if (index < quatidade) return estrela;
        return estrelaCinza
    }

    const estilos = estilosFuncao(grande)

    const RenderEstrelas = () => {
        const listaEstrela = [];
        for (let i = 0; i < 5; i++) {
            listaEstrela.push(
                <TouchableOpacity
                    key={i}
                    onPress={() => setQuantidade(i + 1)}
                    disabled={!editavel}
                >
                    <Image source={getImagem(i)} style={estilos.estrela}/>
                </TouchableOpacity>
            )
        }

        return listaEstrela;
    }

    return <View style={estilos.estrelas}>
        <RenderEstrelas/>
    </View>

}

const estilosFuncao = (grande) => StyleSheet.create({
    estrelas: {
        flexDirection: 'row'
    },
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
        marginRight: 2
    }

})
