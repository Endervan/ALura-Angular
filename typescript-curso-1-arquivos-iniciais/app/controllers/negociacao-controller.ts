import {Negociacao} from "../models/negociacao.js";
import {Negociacoes} from "../models/negociacoes.js";
import {NegociacoesViews} from "../views/negociacoes-views.js";
import {MensagemViews} from "../views/mensagem-views.js";
import {DiasDaSemana} from "../enums/dias-da-semana.js";

export class NegociacaoController {
    private readonly inputData: HTMLInputElement;
    private readonly inputQuantidade: HTMLInputElement;
    private readonly inputValor: HTMLInputElement;
    private readonly negociacoes = new Negociacoes();
    private readonly negociacoesView = new NegociacoesViews('#negociacoesView');
    private readonly mensagemView = new MensagemViews('#mensagemView');


    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);

    }

    adiciona(): void {
        const negociacao = this.criarNegociacao();
        // negociacao somente dias uteis semana ..exceto domingo e sabado
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociações em dias Uteis sao aceitos')
            return
        }
        this.negociacoes.adiciona(negociacao);
        this.atualizarView();
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

    limparFromulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();

    }

    private ehDiaUtil(date: Date) {
        return date.getDay() > DiasDaSemana.DOMINGO && date.getDay() < DiasDaSemana.SABADO
    }

    private atualizarView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação Adicionada com sucesso.')
    }
}