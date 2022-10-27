export class NegociacoesViews {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        return `
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>Quantidade</th>
                <th>Valor</th>
            </tr>
        </thead>
        <tbody>
            ${model.lista().map(negociacao => {
            return `
                <tr>
                    <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                </tr>
                `;
        }).join('')} 
       </tbody>
        </table>
        `;
    }
    update(model) {
        // converte string em element DOM
        this.elemento.innerHTML = this.template(model);
    }
}
