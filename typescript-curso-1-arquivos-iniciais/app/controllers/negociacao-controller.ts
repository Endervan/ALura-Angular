import {Negociacao} from "../models/negociacao.js";

export class NegociacaoController {
    private readonly inputData: HTMLInputElement;
    private readonly inputQuantidade: HTMLInputElement;
    private readonly inputValor: HTMLInputElement;

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona():void {
        const negociacao = this.criarNegociacao();
        console.log(negociacao)
        this.limparFromulario();
    }

    criarNegociacao(): Negociacao {
        const exp = /-/g; // expressao regular pega todas ocorrencia q tenha -
        // procura date tudo q tive - e substituir por virgular(,)
        const date = new Date(this.inputData.value.replace(exp, ','))
        const quantidade = parseInt(this.inputQuantidade.value); // ‘string’ em número
        const valor = parseFloat(this.inputValor.value); // string em float
        return new Negociacao(date, quantidade, valor);
    }

    limparFromulario():void{

        this.inputData.value='';
        this.inputQuantidade.value='';
        this.inputValor.value='';
        this.inputData.focus();

}
}