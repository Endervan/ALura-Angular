import React, {useMemo, useReducer} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Estrelas from "../../../componentes/Estrelas";

const distanciaEmMetros = (distancia) => {
    console.log(distancia)
    return `${distancia}m`;
}


export default function Produtor({nome, imagem, distancia, estrelas}) { // topo:Topo possivel renomear uma propriedade
    // const [selecionado, setSelecionado] = useState(false);
    const [selecionado, inverterSelecionado] = useReducer((selecionado) => !selecionado, false)

// useMemo => salva memoria uma unica vez pra dados n ser chamando toda vez
    const distanciaTexto = useMemo(()=> distanciaEmMetros(distancia), [distancia]);

    return <TouchableOpacity
        onPress={inverterSelecionado}
        style={estilos.cartao}>
        {/*accessibilityLabel => pessoas q tei deficiencia visual*/}
        <Image style={estilos.imagem} source={imagem} accessibilityLabel={nome}/>
        <View style={estilos.informacoes}>
            <View>
                <Text style={estilos.nome}>{nome}</Text>
                <Estrelas
                    editavel={selecionado}
                    grande={selecionado}
                    quantidade={estrelas}/>
            </View>

            <Text style={estilos.distancia}>{distanciaTexto}</Text>
        </View>

    </TouchableOpacity>


}


const estilos = StyleSheet.create({
    cartao: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: "row",
        elevation: 4,// sombra android

        // sombra ios
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.72
    },
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },
    informacoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold'
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19,
    }

});


// Hooks Básicos:
//
//     useState: usado para gerenciar estados;
// useEffect: usado para gerar efeitos colaterais a certas atualizações;
// useContext: usado para gerenciar contextos entre componentes distintos.

//     Hooks Adicionais:
//
// useReducer: uma alternativa ao useState quando há lógicas complexas;
// useCallback: memoriza uma função, que só é atualizada quando os valores recebidos como argumento são atualizados;
// useMemo: semelhante ao useCallback, mas ao invés de função, armazena um valor;
// useRef: usado normalmente para acessar propriedades de componentes “filhos”;
// useImperativeHandle: usado para personalizar o valor da instância que será acessível aos componentes “pais”;
// useLayoutEffect: semelhante ao useEffect, porém é disparado na mesma fase que componentDidMount e componentDidUpdate. É preferível o uso do useEffect;
// useDebugValue: usado para definir um "label" em hooks customizados que irá aparecer somente em ferramentas de debug.
