export class Negociacao {
    // # => atributos privados
    // constructor(private _data: Date,
    //             private _quantidade: number,
    //             private _valor: number) {
    // }
    //construtoor somente leitura assim tb sem get
    constructor(private  _data: Date,
                public readonly quantidade: number,
                public readonly valor: number) {
    }


    get data(): Date {
        return new Date(this._data.getTime());
    }

    // get quantidade(): number {
    //     return this._quantidade;
    // }
    //
    // get valor(): number {
    //     return this._valor;
    // }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    public static criaDe(dateString:string,quantidadeString:string,valorString:string):Negociacao{
        const exp = /-/g; // expressao regular pega todas ocorrencia q tenha -
        // procura date tudo q tive - e substituir por virgular(,)
        const date = new Date(dateString.replace(exp, ','))
        const quantidade = parseInt(quantidadeString); // ‘string’ em número
        const valor = parseFloat(valorString); // string em float
        return new Negociacao(date, quantidade, valor);
    }
}