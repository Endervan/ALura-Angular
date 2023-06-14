import React, {useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import estilos from './estilos';
import {salvaRepositorioDadosUsuario} from "../../service/requisicoes/repositorios";

export default function InfoRepositorio({ route, navigation }) {
    const [nome, setNome] = useState(route.params.item.name);
    const [data, setData] = useState(route.params.item.data);

   async function salvar() {
        const resultado = await salvaRepositorioDadosUsuario(
            route.params.item.postId,
            nome,
            data,
            route.params.item.id
        )

       if (resultado === 'sucesso'){
           Alert.alert("Repositorio Atualizado");
           navigation.goBack();
       }else {
           Alert.alert("Erro ao Atulaizar Repositorio!!");
       }
    }

    return (
        <View style={estilos.container}>
            <TextInput
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
                value={data}
                onChangeText={setData}
            />
            <TouchableOpacity
                style={estilos.botao}
                onPress={salvar}
            >
                <Text style={estilos.textoBotao}>
                    Salvar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[estilos.botao, {backgroundColor: '#DD2B2B', marginTop: 10}]}
            >
                <Text style={estilos.textoBotao}>
                    Deletar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
