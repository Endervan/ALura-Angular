import React, {useEffect, useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import estilos from './estilos';
import {
    PegarRepositoriosDoUsuarioPeloNome,
    PegarRepositoriosDoUsuarioPeloNomeGit
} from "../../service/requisicoes/repositorios";
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
        // const resultado = await pegarRepositorioDadosUsuario(route.params.id);
        const resultadoGit = await PegarRepositoriosDoUsuarioPeloNomeGit(route?.params.login);
        // setRepo(resultado);
        console.log(resultadoGit)
        setRepo(resultadoGit);
    }, [estaNaTela])

    const topo = () => (
        <View style={estilos.container}>
            <Text style={estilos.repositoriosTexto}>{repo.length} repositórios criados</Text>
            <TouchableOpacity
                style={estilos.botao}
                onPress={() => navigation.navigate('CriarRepositorio', {id: route.params.id})}
            >
                <Text style={estilos.textoBotao}>Adicionar novo repositório</Text>
            </TouchableOpacity>

            <View style={estilos.containerBusca}>
                <TextInput
                    value={nomeRepo}
                    onChangeText={setNomeRepo}
                    placeholder="Busque por nome Repositorio"
                    autoCapitalize="none"
                    style={estilos.inputBuscar}
                />
                <TouchableOpacity
                    disabled={nomeRepo.length === 0}
                    style={(nomeRepo.length === 0 ? estilos.botaoBuscardisable : estilos.botaoBuscarActive)}
                    onPress={buscarRepositorioPorNome}
                >
                    <Text style={(nomeRepo.length > 0 ? estilos.textoBuscar:null)}>Buscar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )


    const lista = (item) => (
        <TouchableOpacity
            style={estilos.repositorio}
            onPress={() => navigation.navigate('InfoRepositorio', {item})}
        >
            <Text style={estilos.repositorioNome}>{item.name}</Text>
            {/*<Text style={estilos.repositorioData}>Atualizado em {item?.data}</Text>*/}
            <Text style={estilos.repositorioData}>Atualizado em {item.updated_at}</Text>
        </TouchableOpacity>
    )


    return (
        <FlatList
            data={repo}
            style={{width: '100%'}}
            keyExtractor={repo => repo.id}
            ListHeaderComponent={topo}
            renderItem={({item}) => lista(item)}
        />
    );
}
