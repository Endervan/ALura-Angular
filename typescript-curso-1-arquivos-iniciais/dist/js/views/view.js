export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        // converte string em element DOM
        this.elemento.innerHTML = this.template(model);
    }
}
