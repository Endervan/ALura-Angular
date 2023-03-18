import {Negociacao} from "../models/negociacao";

export function imprimir(...objetos:Array<Negociacao>) {
for (let objeto of objetos){
    console.log(objeto.paraTexto())
}
}
