import {Image, Text, TouchableOpacity, View} from 'react-native';
import {estilos} from './estilos'
import {ProdutosContext} from "../../contexts/ProdutosContext";
import {useContext} from "react";

export function Produto({item, adicionar=false,pageCarrinho=false}) {
    const {viuProduto, removeProdutoItem} = useContext(ProdutosContext);


    return (
        <View style={estilos.cartao}>
            <Image style={estilos.imagem} source={item.imagem}/>
            <View style={estilos.textoContainer}>
                <Text style={estilos.texto} numberOfLines={1}>{item.texto}</Text>
                <Text style={estilos.preco}>R$ {item.preco}</Text>
            </View>
            {adicionar &&
                <TouchableOpacity style={estilos.botaoAdicionar} onPress={() => viuProduto(item)}>
                    <Text style={estilos.botaoTexto}>+</Text>
                </TouchableOpacity>
            }

            { pageCarrinho &&
                <TouchableOpacity style={estilos.botaoAdicionar} onPress={() => removeProdutoItem(item)}>
                    <Text style={estilos.botaoTexto}>-</Text>
                </TouchableOpacity>

            }
        </View>
    );
}
