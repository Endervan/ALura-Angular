import {Alert, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {useContext} from "react";
import {TemaContext} from "../../contexts/TemaContext";
import {estilos} from "./estilos";
import {AutenticacaoContext} from "../../contexts/AutenticacaoContext";
import {ProdutosContext} from "../../contexts/ProdutosContext";


export default function Finaliza({navigation}) {

    const {temaEscolhido} = useContext(TemaContext);
    const estilo = estilos(temaEscolhido);
    const {usuario} = useContext(AutenticacaoContext);
    const {quantidade, carrinho, precoTotal, finalizarCompra} = useContext(ProdutosContext);


    async function finalizar() {
        const resultado = await finalizarCompra();
        Alert.alert(resultado);
        navigation.navigate('Principal');
    }


    return (
        <View style={estilo.container}>
            <StatusBar/>
            <View style={estilo.containerInfoCard}>
                <Text style={[estilo.containerInfo, estilo.infoEntrega]}>Informações e Entregra</Text>
                <Text style={estilo.containerInfo}>Nome : {usuario?.nome}</Text>
                <Text style={estilo.containerInfo}>Endereço :{usuario?.endereco} </Text>
                <Text style={estilo.containerInfo}>Email : {usuario?.email} </Text>
                <Text style={estilo.containerInfo}>Telefone :{usuario?.telefone} </Text>
            </View>


            <View style={{marginHorizontal: 15}}>
                <Text>Quantidade :{quantidade} </Text>
                <Text>Preço Total : R$ {precoTotal} </Text>
            </View>


            <TouchableOpacity style={estilo.botao} onPress={() => finalizar()}>
                <Text style={estilo.botaoTexto}>Finalizar</Text>
            </TouchableOpacity>
        </View>
    );
}

