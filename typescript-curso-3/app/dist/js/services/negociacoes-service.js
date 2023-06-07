import { Negociacao } from "../models/negociacao";
export class NegociacoesService {
    obterNegociacoesDoDia() {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados) => {
            return dados.map(dadoDehj => {
                return new Negociacao(new Date(), dadoDehj.vezes, dadoDehj.montante);
            });
        });
    }
}
//# sourceMappingURL=negociacoes-service.js.map