export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
        this.negociacoes = [];
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        return new Date(this._data.getTime());
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
    paraTexto() {
        return `
        Data : ${this.data},
        Quantidade : ${this.quantidade},
        Valor: ${this.valor}
        `;
    }
    lista() {
        return this.negociacoes;
    }
    ehIgual(negociacao) {
        return this.data.getDate() === negociacao.data.getDate() &&
            this.data.getMonth() === negociacao.data.getMonth() &&
            this.data.getFullYear() === negociacao.data.getFullYear();
    }
}
//# sourceMappingURL=negociacao.js.map