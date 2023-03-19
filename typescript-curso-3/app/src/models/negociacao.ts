import {Imprimivel} from "../Utils/imprimivel";

export class Negociacao extends Imprimivel {


    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {
        super();
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
}

const o: Imprimivel = new Negociacao(new Date(), 1, 100);
// Imptimivel usando polimofismo pra garanti q o objetos seja msm no final
