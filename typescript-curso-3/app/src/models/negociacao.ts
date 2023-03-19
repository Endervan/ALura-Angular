import {Imprimivel} from "../Utils/imprimivel";

export class Negociacao implements Imprimivel {


    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        return new Date(this._data.getTime());
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }

    public paraTexto(): string {
        return `
        Data : ${this.data},
        Quantidade : ${this.quantidade},
        Valor: ${this.valor}
        `
    }

    public ehIgual(negociacao: Negociacao): boolean {
        return this.data.getDate() === negociacao.data.getDate() &&
            this.data.getMonth() === negociacao.data.getMonth() &&
            this.data.getFullYear() === negociacao.data.getFullYear();
    }
}

const o: Imprimivel = new Negociacao(new Date(), 1, 100);
// Imptimivel usando polimofismo pra garanti q o objetos seja msm no final
