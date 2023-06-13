import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import estilos from './estilos';

export default function Repositorios({ route, navigation }) {
    const [repo, setRepo] = useState([]);

    return (
        <View style={estilos.container}>
                <Text style={estilos.repositoriosTexto}>{repo.length} repositórios criados</Text>
                <TouchableOpacity
                    style={estilos.botao}
                    onPress={() => navigation.navigate('CriarRepositorio')}
                >
                    <Text style={estilos.textoBotao}>Adicionar novo repositório</Text>
                </TouchableOpacity>
        </View>
    );
}
