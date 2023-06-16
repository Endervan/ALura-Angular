import {FlatList, SafeAreaView, StatusBar, StyleSheet} from "react-native"
import NotaEditor from "./src/componentes/NotaEditor";
import {useEffect, useState} from "react";
import {Nota} from "./src/componentes/Nota";
import {buscarNotas, criarTabela} from "./src/service/NotasService";


export default function App() {
    useEffect(async () => {
        criarTabela();
        await mostraNotas();
    }, []);


    const [notaSelecionada, setNotaSelecionada] = useState({});
    const [notas, setNotas] = useState([]);

    async function mostraNotas() {
        const todasNotas = await buscarNotas();
        setNotas(todasNotas)
    }


    return (
        <SafeAreaView style={estilos.container}>
            <FlatList data={notas}
                      renderItem={(nota) => <Nota {...nota} setNotaSelecionada={setNotaSelecionada}/>}
                      keyExtractor={nota => nota.id}
            />
            <NotaEditor mostraNotas={mostraNotas} notaSelecionda={notaSelecionada} setNotaSelecionada={setNotaSelecionada}/>
            <StatusBar/>
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
        justifyContent: "flex-start",
    },
})

