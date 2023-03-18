export function domInjector(seletor: string) {
    // target => propriedade estatica de classe retorna funcao construtora
    return function (target: any, propertyKey: string) {
        console.log(`Modificando Prototype ${target.constructor.name} 
        e adicionando get para a propriedade ${propertyKey}`);

        let elemento: HTMLElement; // cast elementos
        const getter = function () {
            if (!elemento) { // elemento com tipo HTMLInputElement nunca sera nulo
                elemento = <HTMLInputElement>document.querySelector(seletor);
                console.log(`Buscando elemento do Dom  com o selector ${seletor}
             para injetar em ${propertyKey}`)
            }

            return elemento
        }

        Object.defineProperty(
            target,
            propertyKey,
            {get: getter}
        )
    }


}

