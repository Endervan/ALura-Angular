import {DiasDaSemana} from '../enums/dias-da-semana.js';
import {Negociacao} from '../models/negociacao.js';
import {Negociacoes} from '../models/negociacoes.js';
import {MensagemView} from '../views/mensagem-view.js';
import {NegociacoesView} from '../views/negociacoes-view.js';
import {logarTempoExecucao} from "../decorators/logar-tempo-execucao.js";
import {domInjector} from "../decorators/dom-Injector.js";
import {NegociacoesService} from "../services/negociacoes-service.js";

export class NegociacaoController {
    @domInjector('#data')
    private inputData: HTMLInputElement;
    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @domInjector('#valor')
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private negociacaoService = new NegociacoesService()

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }

    @logarTempoExecucao()
    public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView
                .update('Apenas negociações em dias úteis são aceitas');
            return;
        }

        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
        const t2 = performance.now();
    }

    public importaDados(): void {
        this.negociacaoService.obterNegociacoesDoDia()
            .then(negociacoesDeHj => {
                return negociacoesDeHj.filter(negociacoesDeHj => {
                    return !this.negociacoes
                        .lista()
                        .some(negociacao =>
                            negociacao.ehIgual(negociacoesDeHj))
                    // some procura na primeira interacao ele para e retorna true
                })
            })
            .then(negociacoesDeHj => {
                for (let negocoacao of negociacoesDeHj) {
                    this.negociacoes.adiciona(negocoacao)
                }
                this.negociacoesView.update(this.negociacoes)
            })
    }

    private ehDiaUtil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO
            && data.getDay() < DiasDaSemana.SABADO;
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }
}
