import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

import logo from '../../../assets/logo.png'
import {carregaTopo} from "../../../service/carregaDados";

class Topo extends React.Component {

    state = {
        topo:{
            boasVindas: '',
            legenda:''
        }
    }

    atualizarTopo() {
        const retorno = carregaTopo();
        this.setState({topo:retorno});
    }

    // life cicly qnd component e montado
    componentDidMount() {
        this.atualizarTopo();
    }


    render() {
        return <View style={estilos.topo}>
            <Image style={estilos.imagem} source={logo}/>
            <Text style={estilos.boasVindas}>{this.state.topo.boasVindas}</Text>
            <Text style={estilos.legenda}>{this.state.topo.legenda}</Text>
        </View>
    }


}


const estilos = StyleSheet.create({
    topo: {
        backgroundColor: '#F6F6F6',
        padding: 16,
    },
    imagem: {
        width: 70,
        height: 28,
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: '#464646'
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
        color: '#A3A3A3',
    }
});


export default Topo;

// ciclo vidas
// componentDidMount: que, como vimos, é executado quando o componente termina de renderizar;
// componentDidUpdate: que é executado quando o componente recebe alguma atualização e não é executado na primeira vez que o componente carrega;
// componentWillUnmount: que é executado quando o componente é removido da tela;
// componentDidCatch: que é chamado quando a aplicação encontra algum erro durante a renderização, em algum método do ciclo de vida ou no construtor de componentes filhos.
