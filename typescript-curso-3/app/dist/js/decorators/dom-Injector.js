export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(`Modificando Prototype ${target.constructor.name} 
        e adicionando get para a propriedade ${propertyKey}`);
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`Buscando elemento do Dom  com o selector ${seletor}
             para injetar em ${propertyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
