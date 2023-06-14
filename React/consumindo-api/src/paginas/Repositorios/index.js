import React, {useEffect, useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import estilos from './estilos';
import {pegarRepositorioDadosUsuario, PegarRepositoriosDoUsuarioPeloNome} from "../../service/requisicoes/repositorios";
import {useIsFocused} from "@react-navigation/native";

export default function Repositorios({route, navigation}) {
    const [repo, setRepo] = useState([]);
    const estaNaTela = useIsFocused();// boleano verifica se tela ta ativa
    const [nomeRepo, setNomeRepo] = useState('');

    async function buscarRepositorioPorNome() {
        const resultado = await PegarRepositoriosDoUsuarioPeloNome(route.params.id, nomeRepo);
        setRepo(resultado);
        setNomeRepo('');
    }



    useEffect(async () => {
        const resultado = await pegarRepositorioDadosUsuario(route.params.id);
        setRepo(resultado);
    }, [estaNaTela])

    return (
        <View style={estilos.container}>
            <Text style={estilos.repositoriosTexto}>{repo.length} repositórios criados</Text>
            <TouchableOpacity
                style={estilos.botao}
                onPress={() => navigation.navigate('CriarRepositorio',{id:route.params.id})}
            >
                <Text style={estilos.textoBotao}>Adicionar novo repositório</Text>
            </TouchableOpacity>

            <View style={estilos.container}>
                <TextInput
                    value={nomeRepo}
                    onChangeText={setNomeRepo}
                    placeholder="Busque por nome Repositorio"
                    autoCapitalize="none"
                    style={estilos.entrada}
                />
                <TouchableOpacity
                    onPress={buscarRepositorioPorNome}
                >
                    <Text>Buscar</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={repo}
                style={{ width: '100%' }}
                keyExtractor={repo => repo.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={estilos.repositorio}
                        onPress={() => navigation.navigate('InfoRepositorio', {item})}
                    >
                        <Text style={estilos.repositorioNome}>{item.name}</Text>
                        <Text style={estilos.repositorioData}>Atualizado em {item.data}</Text>
                    </TouchableOpacity>
                )}
            />

        </View>
    );
}
