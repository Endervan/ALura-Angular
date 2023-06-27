import React, {useEffect, useRef, useState} from "react";
import {FlatList, Image, View} from "react-native";
import styles from "./styles";


export function Carrocel({data,velocidade}) {
    const carrosselRef = useRef();
    const [indice, setIndice] = useState(0);

    useEffect(() => {
        carrosselRef.current.scrollToIndex({index: indice});
        const intervalo = setInterval(() => {
            alterarPosicaoObjeto();
        }, velocidade ? velocidade : 1000)
        return () => clearInterval(intervalo);
    }, [indice]);

    function alterarPosicaoObjeto() {
        if (indice < data.length - 1) {
            setIndice(indice + 1);
        } else {
            setIndice(0)
        }
    }

    return (
        <View style={styles.conteiner}>
            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => (
                    <Image
                        source={item.imagem}
                        style={[styles.image, index == data.length - 1 ? {marginRight: 200} : null]}
                        resizeMode="contain"
                    />
                )}
                ref={carrosselRef}
            />
        </View>
    )

}
