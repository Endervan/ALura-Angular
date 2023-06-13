import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

import useTextos from '../../../hooks/useTextos';
import Texto from '../../../componentes/Texto';
import {useNavigation} from "@react-navigation/native";

export default function Detalhes({nome, produtor, descricao, preco}) {
    const navigation = useNavigation();
    const {botaoComprar} = useTextos();

    return <>
        <Texto style={estilos.nome}>{nome}</Texto>
        <View style={estilos.fazenda}>
            <Image source={produtor.imagem} style={estilos.imagemFazenda}/>
            <Texto style={estilos.nomeFazenda}>{produtor.nome}</Texto>
        </View>
        <Texto style={estilos.descricao}>{descricao}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>

        <TouchableOpacity
            style={estilos.botao}
            onPress={() => navigation.navigate('Parabens', {
                    compra: {nome, timestamp: +new Date()}
                    // mesma coisa  new Date()).valueOf() == + new Date
                }
            )}>
            <Texto style={estilos.textoBotao}>{botaoComprar}</Texto>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
})


// navigation.navigate()
// É a opção mais comum, pois faz a navegação de uma tela para outra. Dependendo do tipo de navegação, pode fazer ações extra, como é o caso do exemplo da stack abaixo.
//
//     Supondo que nossa tela inicial é a Home, vamos ver o fluxo de navegação e empilhamento das telas abaixo:
//
//     1) Executar o comando: navigation.navigate('Produtor');
//
// 2) Pilha de telas: Home e Produtor;
//
// 3) Executar o comando navigation.navigate('Cesta');
//
// 4) Pilha de telas: Home, Produtor e Cesta;
//
// 5) Executar o comando `navigation.navigate('Home');

// 6) Pilha de telas: Home.

// Neste caso, quando trabalhamos com stacks, ao invés de empilhar uma nova tela, teremos as telas anteriores removidas e voltaremos à mesma tela de Home.
//
// navigation.reset()
// Pode ser usada para reiniciar a navegação por completo, escolhendo ainda uma tela para iniciar uma nova navegação totalmente limpa.
//
// navigation.goBack()
// Fecha a tela atual e volta à tela anterior. Semelhante ao botão voltar do Android, mas com a diferença de que, se não há tela anterior, o botão de voltar do Android pode fechar a aplicação, já o goBack não executa ação alguma.
//
// navigation.setParams()
// Muda os parâmetros recebidos pela tela atual e não envia esses parâmetros para outras telas.
//
// navigation.setOptions()
// Muito útil para mudar as opções da tela como títulos gerados pela navegação. Veja o exemplo abaixo, supondo que o nome e título da rota sejam ambos Home:

// Opções da stack (pilha)
// Podemos acessar os métodos da navegação stack neste link da navegação. E, abaixo, podemos ver uma explicação breve de cada um.
//
//     Observação: há dois tipos de navegação em pilha na biblioteca react-navigation, o Native Stack e o Stack. Ambos têm os mesmos métodos de navegação. A diferença principal entre elas é que a Stack possibilita animações customizadas, pois é construído diretamente em JavaScript, já a Native Stack utiliza a navegação nativa do Android e do iOS, sendo mais performática, mas perdendo esta customização.
//
// navigaition.replace(): substitui a tela atual (topo da pilha) por outra tela. (esta navegação não está no link da documentação acima, porém é descrita neste link geral de navegação;
// navigation.push(): adiciona uma nova tela no topo da pilha e navega para ela. O navigation.navigate() também pode ser usado para executar a mesma ação com stacks;
// navigation.pop(): remove uma ou mais telas da pilha, ou seja, volta a quantidade de telas desejada. O navigation.goBack() também pode ser usado para executar a mesma ação com stacks;
// navigation.popToTop(): semelhante ao pop, porém remove todas as telas até sobrar apenas a tela inicial da pilha. Esse método não aceita, até o momento, passar parâmetros.
//     Opções de tabs
// A biblioteca react-navigation dá suporte a 3 tipos de navegação em abas: Bottom Tabs, Material Bottom Tabs e Material Top Tabs. Todos esses tipos apresentam a mesma opção de navegação:
//
//     navigation.jumpTo(): muito semelhante ao navigation.navigate(), muda a aba para a desejada podendo passar parâmetros.
//     Opções do menu lateral
// Também podemos usar o jumpTo em navegações do tipo Drawer e o comportamento é o mesmo. Mas além dessa opção ainda há opções para controlar o próprio menu, como: openDrawer, closeDrawer e toggleDrawer.
