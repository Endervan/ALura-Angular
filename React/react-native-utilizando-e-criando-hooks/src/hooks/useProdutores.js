import {useEffect, useState} from "react";
import {carregaProdutores} from "../service/carregaDados";


export default function useProdutores() {
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    function compareDistancia(produtor1, produtor2) {
        return produtor1.distancia - produtor2.distancia;
    }

    useEffect(() => {
        const retorno = carregaProdutores();
        const listaOrdenada = retorno.lista.sort(compareDistancia);


        setTitulo(retorno.titulo);
        setLista(listaOrdenada)
    }, []);//array vazio fica parecido com life ciclo componentDidMount qnd usa classe


    return [titulo, lista];
}
