import {Negociacao} from "./negociacao.js";

// Array<Negociacao> msm coisa Negociacao[]
export class Negociacoes {
    private readonly negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    // ReadonlyArray<Negociacao> msm coisa readonly Negociacao[]

    lista(): readonly  Negociacao[] { // ReadonlyArray array somente leitura
        return this.negociacoes;

    }
}
