import {FlatList, SafeAreaView, StatusBar, StyleSheet, View} from "react-native"
import NotaEditor from "./src/componentes/NotaEditor";
import {useEffect, useState} from "react";
import {Nota} from "./src/componentes/Nota";
import {buscarNotas, criarTabela, filtraPorCategoria} from "./src/service/NotasService";
import {Picker} from "@react-native-picker/picker";


export default function App() {
    const [categoria, setCategoria] = useState("Todos");
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

    async function filtraLista(categoriaSelecionada) {
        setCategoria(categoriaSelecionada)
        if(categoriaSelecionada === "Todos") {
            await mostraNotas()
        } else {
            setNotas(await filtraPorCategoria(categoriaSelecionada))
        }
    }


    return (
        <SafeAreaView style={estilos.container}>
            <FlatList data={notas}
                      renderItem={(nota) => <Nota {...nota} setNotaSelecionada={setNotaSelecionada}/>}
                      keyExtractor={nota => nota.id}
                      ListHeaderComponent={() => {return (
                          <View style={estilos.picker}>
                              <Picker selectedValue={categoria} onValueChange={(categoriaSelecionada) => filtraLista(categoriaSelecionada)}>
                                  <Picker.Item label="Todos" value="Todos"/>
                                  <Picker.Item label="Pessoal" value="Pessoal"/>
                                  <Picker.Item label="Trabalho" value="Trabalho"/>
                                  <Picker.Item label="Outros" value="Outros"/>
                              </Picker>
                          </View>
                      )}}
            />
            <NotaEditor mostraNotas={mostraNotas}
                        wnotaSelecionda={notaSelecionada}
                        setNotaSelecionada={setNotaSelecionada}/>
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

