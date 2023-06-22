import {createContext, useState} from "react";

export const AutenticacaoContext = createContext({});


export function AutenticacaoProvider({children}) {
    const [usuario, setUsuario] = useState({});

    function login(email, senha) {
        if (email == 'ender@email.com' && senha == 123) {
            setUsuario({
                nome:'Ender',
                email,
                endereco:'QR 406',
                telefone:'+55 (61) 991411476'
            })
            return 'ok'
        } else {
            return 'Email ou senha incorretos'
        }

    }

    return (
        <AutenticacaoContext.Provider value={{
            usuario,
            login
        }}>
            {children}
        </AutenticacaoContext.Provider>
    )
}


