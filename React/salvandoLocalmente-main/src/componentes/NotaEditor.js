import React, {useEffect, useState} from "react"
import {Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Picker} from "@react-native-picker/picker";
import {adicionaNota, atualizarNotas, removeNota} from "../service/NotasService";

export default function NotaEditor({mostraNotas, notaSelecionda, setNotaSelecionada}) {
    useEffect(() => {
        if (notaSelecionda) {
            if (notaSelecionda.id) {
                console.log(notaSelecionda.id)
                preencheModal();
                setNotaParaAtualizar(true);
                setModalVisivel(true);
                return
            }
        }

        setNotaParaAtualizar(false)
    }, [notaSelecionda])

    const [texto, setTexto] = useState("");
    const [categoria, setCategoria] = useState("Pessoal");
    const [titulo, setTitulo] = useState("");
    const [modalVisivel, setModalVisivel] = useState(false);
    const [notaParaAtualizar, setNotaParaAtualizar] = useState(false);

    async function salvaNota() {
        const umaNota = {
            titulo,
            categoria,
            texto
        }
        await adicionaNota(umaNota)
        mostraNotas();
        limparModal();
    }


    async function modificarNota() {
        const umaNota = {
            titulo,
            categoria,
            texto,
            id: notaSelecionda.id
        }
        await atualizarNotas(umaNota);
        limparModal();
        mostraNotas();
    }

    async function deletaNota() {
        await removeNota(notaSelecionda)
        limparModal();
        mostraNotas();
    }

    function limparModal() {
        setTitulo("");
        setCategoria("Pessoal");
        setTexto("");
        setNotaSelecionada([]);
        setModalVisivel(false);
    }

    function preencheModal() {
        setTitulo(notaSelecionda.titulo);
        setCategoria(notaSelecionda.categoria);
        setTexto(notaSelecionda.texto);
    }


    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisivel}
                onRequestClose={() => {
                    setModalVisivel(false)
                }}
            >
                <View style={estilos.centralizaModal}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={estilos.modal}>

                            <Text style={estilos.modalTitulo}>Criar Titulo</Text>
                            <Text style={estilos.modalSubTitulo}>Conteúdo da Titulo</Text>
                            <TextInput
                                style={estilos.modalInput}
                                multiline={true}
                                numberOfLines={3}
                                onChangeText={novoTitulo => setTitulo(novoTitulo)}
                                placeholder="Digite um titulo"
                                value={titulo}/>

                            <View style={estilos.modalPicker}>
                                <Text style={estilos.modalSubTitulo}>Conteúdo da Categoria</Text>
                                <Picker
                                    selectedValue={categoria}
                                    onValueChange={(novaCategoria) => setCategoria(novaCategoria)}>
                                    <Picker.Item label="Pessoal" value="Pessoal"/>
                                    <Picker.Item label="Trabalho" value="Trabalho"/>
                                    <Picker.Item label="Outros" value="Outros"/>
                                </Picker>

                            </View>

                            <Text style={estilos.modalTitulo}>Criar nota</Text>
                            <Text style={estilos.modalSubTitulo}>Conteúdo da nota</Text>
                            <TextInput
                                style={estilos.modalInput}
                                multiline={true}
                                numberOfLines={3}
                                onChangeText={novoTexto => setTexto(novoTexto)}
                                placeholder="Digite aqui seu lembrete"
                                value={texto}/>
                            <View style={estilos.modalBotoes}>
                                <TouchableOpacity
                                    style={estilos.modalBotaoSalvar}
                                    onPress={notaParaAtualizar ? modificarNota : salvaNota}
                                ><Text style={estilos.modalBotaoTexto}>Salvar</Text>
                                </TouchableOpacity>

                                {notaParaAtualizar ?
                                    <TouchableOpacity style={estilos.modalBotaoDeletar} onPress={() => deletaNota()}>
                                        <Text style={estilos.modalBotaoTexto}>Excluir</Text>
                                    </TouchableOpacity> : <></>
                                }

                                <TouchableOpacity style={estilos.modalBotaoCancelar} onPress={() => limparModal()}>
                                    <Text style={estilos.modalBotaoTexto}>Cancelar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </Modal>
            <TouchableOpacity onPress={() => {
                setModalVisivel(true)
            }} style={estilos.adicionarMemo}>
                <Text style={estilos.adicionarMemoTexto}>+</Text>
            </TouchableOpacity>
        </>
    )
}

const estilos = StyleSheet.create({
    centralizaModal: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end"
    },
    modal: {
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 32,
        marginTop: 8,
        marginHorizontal: 16,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    modalTitulo: {
        fontSize: 28,
        fontWeight: "600",
        marginBottom: 18,
    },
    modalInput: {
        fontSize: 18,
        marginBottom: 12,
        paddingHorizontal: 4,
        borderBottomWidth: 1,
        borderBottomColor: "#FF9A94",
    },
    modalPicker: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#EEEEEE",
        marginBottom: 12,
    },
    modalSubTitulo: {
        fontSize: 14,
        marginBottom: 8,
        fontWeight: "600"
    },
    modalBotoes: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    modalBotaoSalvar: {
        backgroundColor: "#2ea805",
        borderRadius: 5,
        padding: 8,
        width: 80,
        alignItems: "center",
    },
    modalBotaoDeletar: {
        backgroundColor: "#d62a18",
        borderRadius: 5,
        padding: 8,
        width: 80,
        alignItems: "center",
    },
    modalBotaoCancelar: {
        backgroundColor: "#057fa8",
        borderRadius: 5,
        padding: 8,
        width: 80,
        alignItems: "center",
    },
    modalBotaoTexto: {
        color: "#FFFFFF",
    },
    adicionarMemo: {
        backgroundColor: "#54ba32",
        justifyContent: "center",
        height: 64,
        width: 64,
        margin: 16,
        alignItems: "center",
        borderRadius: 9999,
        position: "absolute",
        bottom: 0,
        right: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    adicionarMemoTexto: {
        fontSize: 32,
        lineHeight: 40,
        color: "#FFFFFF",
    }
});
