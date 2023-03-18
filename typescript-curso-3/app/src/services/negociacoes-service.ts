import {NegociacoesDoDia} from "../interfaces/negociacoesDoDia";
import {Negociacao} from "../models/negociacao";

export class NegociacoesService {
    public obterNegociacoesDoDia(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados: NegociacoesDoDia[]) => {
                return dados.map(dadoDehj => {
                    return new Negociacao(
                        new Date(),
                        dadoDehj.vezes,
                        dadoDehj.montante)
                })
            });
    }

}
