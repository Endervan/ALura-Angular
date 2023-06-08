import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import Item from "./componentes/Item";
import Texto from "../../components/Texto";


export default function Cesta({topo, detalhes, itens}) {
    return <>

        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={nome => nome}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo}/>
                    <View style={style.cesta}>
                        <Detalhes {...detalhes}/>
                        <Texto style={style.titulo}>{itens.titulo}</Texto>
                    </View>
                </>
            }
            }
        />

    </>
}

const style = StyleSheet.create({

    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

    titulo:{
        fontSize: 20,
        lineHeight: 32,
        color: "#464646",
        marginBottom:8,
        marginTop:32,
        fontWeight:"bold"
    }

});
