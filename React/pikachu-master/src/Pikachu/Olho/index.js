import React from 'react';
import {Brilho, OlhoExterno} from './estilos'

export default function Olho({ style }) {
    return <OlhoExterno style={style} >
        <Brilho />
    </OlhoExterno>
}
