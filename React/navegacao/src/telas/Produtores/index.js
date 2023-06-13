import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';

import Produtor from './componentes/Produtor';
import Topo from './componentes/Topo';
import useProdutores from '../../hooks/useProdutores';
import useTextos from '../../hooks/useTextos';
import {useNavigation} from "@react-navigation/native";

export default function Produtores({melhoresProdutores}) {
    const navigation = useNavigation();
    const lista = useProdutores(melhoresProdutores);
    const {tituloProdutores, mensagemCompra} = useTextos();


    // useEffect(() => {
    //     setExibirmensagem(!!nomeCompra);
    //     let timeout;
    //     if (nomeCompra) {
    //         timeout = setTimeout(() => {
    //             setExibirmensagem(false)
    //         }, 3000)
    //     }
    //
    //     return ()=>clearTimeout(timeout);// todo return se usa dentro useEffect e uma por vez e nao paralelamente
    // }, [timestampCompra]);

    const TopoLista = () => {
        return <>
            <Topo melhoresProdutores={melhoresProdutores}/>
            <Text style={estilos.titulo}>{tituloProdutores}</Text>
        </>
    }

    return <FlatList
        data={lista}
        renderItem={
            ({item}) => <Produtor
                {...item}
                aoPressionar={() => {
                    navigation.navigate('Produtor', item)
                }}/>
        }
        keyExtractor={({nome}) => nome}
        ListHeaderComponent={TopoLista}
        style={estilos.lista}/>
}

const estilos = StyleSheet.create({
    lista: {
        backgroundColor: '#ffffff',
    },
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646',
    },
    compra: {
        backgroundColor: '#EAF5F3',
        padding: 16,
        fontSize: 16,
        lineHeight: 26,
        color: '#464646',
    }
})
