import {createContext, useEffect, useState} from "react";
import {claro, escuro} from '../estilosGlobais';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TemaContext = createContext({});


export function TemaProvider({children}) {
    const [temaAtual, setTemaAtual] = useState('escuro');

    const temas = {
        'escuro': escuro,
        'claro': claro
    }

    useEffect(async ()=>{
        const  temaSalvo = await AsyncStorage.getItem('@tema');
        if (temaSalvo) {
            setTemaAtual(temaSalvo);
        }

    },[])

    async function salvaTemaNodispositivo(tema) {
        await AsyncStorage.setItem('@tema', tema);
        setTemaAtual(tema)
    }

    return (
        <TemaContext.Provider value={{
            temaAtual,
            setTemaAtual,
            temaEscolhido: temas[temaAtual],
            salvaTemaNodispositivo
        }}>
            {children}
        </TemaContext.Provider>
    )
}


