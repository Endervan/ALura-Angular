import {Negociacoes} from "../models/negociacoes.js";

export class View {
    protected elemento:HTMLElement;

    constructor(seletor:string) {
        this.elemento = document.querySelector(seletor)
    }

}