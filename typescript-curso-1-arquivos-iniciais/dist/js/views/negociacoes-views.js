export class NegociacoesViews {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template() {
        return `
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>Quantidade</th>
                <th>Valor</th>
            </tr>
        </thead>
        </table>
        `;
    }
    update() {
        this.elemento.innerHTML = this.template();
    }
}
