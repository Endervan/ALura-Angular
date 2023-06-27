import React from "react";
import {FlatList, Image, View} from "react-native";
import styles from "./styles";


export function Carrocel({data}) {
    return (
        <View style={styles.conteiner}>
            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Image
                        source={item.imagem}
                        style={styles.image}
                        resizeMode="contain"
                    />
                )}
            />
        </View>
    )

}
