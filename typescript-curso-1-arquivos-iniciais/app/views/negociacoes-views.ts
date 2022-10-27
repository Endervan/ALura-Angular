export class NegociacoesViews {
    private elemento:HTMLElement;

    constructor(seletor:string) {
        this.elemento = document.querySelector(seletor)
    }

    template():string{
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

    update():void{
        this.elemento.innerHTML = this.template();
    }
}