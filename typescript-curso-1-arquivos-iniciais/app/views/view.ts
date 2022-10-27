export abstract class View<T> {
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor)
    }


    update(model: T): void {
        // converte string em element DOM
        this.elemento.innerHTML = this.template(model);
    }

    // metodo ‘abstract’ forca filho a sobrescreve o metodo
   protected abstract template(model: T): string;
}

