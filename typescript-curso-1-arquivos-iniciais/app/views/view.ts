export class View {
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor)
    }


    update(model: string): void {
        // converte string em element DOM
        this.elemento.innerHTML = this.template(model);
    }

    template(model: string): string {
        throw Error('Classe filha precisa sobrescrever(implementa) este metodo')
    }

}