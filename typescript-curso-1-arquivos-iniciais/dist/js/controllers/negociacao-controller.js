import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesViews } from "../views/negociacoes-views.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesViews('#negociacoesView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update();
    }
    adiciona() {
        const negociacao = this.criarNegociacao();
        this.limparFromulario();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
    }
    criarNegociacao() {
        const exp = /-/g; // expressao regular pega todas ocorrencia q tenha -
        // procura date tudo q tive - e substituir por virgular(,)
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value); // ‘string’ em número
        const valor = parseFloat(this.inputValor.value); // string em float
        return new Negociacao(date, quantidade, valor);
    }
    limparFromulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
