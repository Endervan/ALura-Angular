import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {useContext} from "react";
import {TemaContext} from "../../contexts/TemaContext";
import {estilos} from "./estilos";
import {AutenticacaoContext} from "../../contexts/AutenticacaoContext";
import {ProdutosContext} from "../../contexts/ProdutosContext";


export default function Finaliza({navigation}) {

    const {temaEscolhido} = useContext(TemaContext);
    const estilo = estilos(temaEscolhido);
    const {usuario} = useContext(AutenticacaoContext);
    const {quantidade, carrinho} = useContext(ProdutosContext);


    return (
        <View style={estilo.container}>
            <StatusBar/>
            <TouchableOpacity style={estilo.botao} onPress={()=>navigation.navigate('Principal')}>
                <Text style={estilo.botaoTexto}>Finalizar</Text>
            </TouchableOpacity>
        </View>
    );
}

