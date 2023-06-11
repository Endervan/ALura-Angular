import {useEffect, useState} from "react";
import {carregaProdutores} from "../service/carregaDados";


export default function useProdutores() {
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const retorno = carregaProdutores();
        setTitulo(retorno.titulo);
        setLista(retorno.lista)
    }, []);//array vazio fica parecindo com life ciclo componentDidMount qnd usa classe


    return [titulo,lista];
}
