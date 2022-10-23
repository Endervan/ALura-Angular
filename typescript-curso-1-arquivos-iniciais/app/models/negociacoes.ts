import {Negociacao} from "./negociacao.js";

export class Negociacoes {
    private readonly negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): Array<Negociacao> {
        return this.negociacoes;

    }
}
