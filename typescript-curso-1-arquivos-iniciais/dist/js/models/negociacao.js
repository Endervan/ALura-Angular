export class Negociacao {
    // # => atributos privados
    // constructor(private _data: Date,
    //             private _quantidade: number,
    //             private _valor: number) {
    // }
    //construtoor somente leitura assim tb sem get
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        return new Date(this._data.getTime());
    }
    // get quantidade(): number {
    //     return this._quantidade;
    // }
    //
    // get valor(): number {
    //     return this._valor;
    // }
    get volume() {
        return this.quantidade * this.valor;
    }
}
