// Array<Negociacao> msm coisa Negociacao[]
export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // ReadonlyArray<Negociacao> msm coisa readonly Negociacao[]
    lista() {
        return this.negociacoes;
    }
}
