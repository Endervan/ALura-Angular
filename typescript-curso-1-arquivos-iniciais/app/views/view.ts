export abstract class View<T> {
    protected elemento: HTMLElement;
    private  escapar = false;

    constructor(seletor: string,escapar?:boolean) {
         const elemento = document.querySelector(seletor);
         if (elemento){
             this.elemento = elemento as HTMLInputElement;
         }else {
             throw Error(`Seletor ${seletor} não existe no DOM`);
         }
        if (escapar){
            this.escapar = escapar;
        }

    }


    update(model: T): void {
        // converte string em element DOM
        let template = this.template(model);
        if (this.escapar){ // removendo script malicioso template
            template = template.replace(/<scrip>[\s\S]*?<\/script>/,'');
        }
        this.elemento.innerHTML = template;
    }

    // metodo ‘abstract’ forca filho a sobrescreve o metodo
   protected abstract template(model: T): string;
}

