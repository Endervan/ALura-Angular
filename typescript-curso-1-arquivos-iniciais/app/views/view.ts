export class View<T> {
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor)
    }


    update(model: T): void {
        // converte string em element DOM
        this.elemento.innerHTML = this.template(model);
    }

    template(model: T): string {
        throw Error('Classe filha precisa sobrescrever(implementa) este metodo')
    }

}