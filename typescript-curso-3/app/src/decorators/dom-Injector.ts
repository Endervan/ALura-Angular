export function domInjector(seletor: string) {
    // target => propriedade estatica de classe retorna funcao construtora
    return function (target: any, propertyKey: string) {
        const getter = function () {
            const elemento = document.querySelector(seletor)
            return elemento
        }
    }


}

