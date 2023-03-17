export function domInjector(seletor: string) {
    // target => propriedade estatica de classe retorna funcao construtora
    return function (target: any, propertyKey: string) {
        console.log(`Modificando Prototype ${target.constructor.name} 
        e adicionando get para a propriedade ${propertyKey}`)
        const getter = function () {
            console.log(`Buscando elemento do Dom  com o selector ${seletor}
             para injetar em ${propertyKey}`)
            return document.querySelector(seletor)
        }

        Object.defineProperty(
            target,
            propertyKey,
            {get: getter}
        )
    }


}

