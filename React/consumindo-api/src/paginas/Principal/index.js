import React, {useState} from 'react';
import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import estilos from './estilos';
import api from "../../service/api";

export default function Principal({navigation}) {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [usuario, setUsuario] = useState({});

    function Busca() {
        api.get('/users').then((response) => {
            console.log(response.data)
        }
        ).catch(error=>{
            console.log(error)
        })
    }

    return (
        <ScrollView>
            <View style={estilos.container}>
                <>
                    <View style={estilos.fundo}/>
                    <View style={estilos.imagemArea}>
                        <Image source={{uri: 'https://avatars.githubusercontent.com/u/54721131?v=4'}}
                               style={estilos.imagem}/>
                    </View>
                    <Text style={estilos.textoNome}>Endervan A.c</Text>
                    <Text style={estilos.textoEmail}>endvan@gmail.com</Text>
                    <View style={estilos.seguidoresArea}>
                        <View style={estilos.seguidores}>
                            <Text style={estilos.seguidoresNumero}>30</Text>
                            <Text style={estilos.seguidoresTexto}>Seguidores</Text>
                        </View>
                        <View style={estilos.seguidores}>
                            <Text style={estilos.seguidoresNumero}>40</Text>
                            <Text style={estilos.seguidoresTexto}>Seguindo</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Repositorios')}>
                        <Text style={estilos.repositorios}>
                            Ver os repositórios
                        </Text>
                    </TouchableOpacity>
                </>

                <TextInput
                    placeholder="Busque por um usuário"
                    autoCapitalize="none"
                    style={estilos.entrada}
                />

                <TouchableOpacity style={estilos.botao} onPress={Busca}>
                    <Text style={estilos.textoBotao}>Buscar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
