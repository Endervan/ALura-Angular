import {Negociacao} from "../models/negociacao.js";
import {Negociacoes} from "../models/negociacoes.js";
import {NegociacoesViews} from "../views/negociacoes-views.js";

export class NegociacaoController {
    private readonly inputData: HTMLInputElement;
    private readonly inputQuantidade: HTMLInputElement;
    private readonly inputValor: HTMLInputElement;
    private readonly negociacoes =  new Negociacoes();
    private readonly negociacoesView = new NegociacoesViews('#negociacoesView');

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update();
    }

    adiciona(): void {
        const negociacao = this.criarNegociacao();
        this.limparFromulario();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista())
    }

    criarNegociacao(): Negociacao {
        const exp = /-/g; // expressao regular pega todas ocorrencia q tenha -
        // procura date tudo q tive - e substituir por virgular(,)
        const date = new Date(this.inputData.value.replace(exp, ','))
        const quantidade = parseInt(this.inputQuantidade.value); // ‘string’ em número
        const valor = parseFloat(this.inputValor.value); // string em float
        return new Negociacao(date, quantidade, valor);
    }

    limparFromulario(): void {

        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();

    }
}