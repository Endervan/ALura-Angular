import {Imprimivel} from "../Utils/imprimivel.js";
import {Comparavel} from "../Utils/comparavel.js";

export class Negociacao implements Imprimivel, Comparavel<Negociacao> {
    private negociacoes: Negociacao[] = [];


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
        return JSON.stringify(this.negociacoes, null, 2)
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    public ehIgual(negociacao: Negociacao): boolean {
        return JSON.stringify(this.lista) === JSON.stringify(negociacao.lista())
    }
}

const o: Imprimivel = new Negociacao(new Date(), 1, 100);
// Imptimivel usando polimofismo pra garanti q o objetos seja msm no final
