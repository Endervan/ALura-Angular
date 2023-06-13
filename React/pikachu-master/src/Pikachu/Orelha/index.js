import React from 'react';

import {Marca, OrelhaExterna, Ponta} from './estilos';

export default function Orelha({ direita = false }) {
    return <OrelhaExterna direita={direita}>
        <Ponta />
        <Marca />
    </OrelhaExterna>
}
