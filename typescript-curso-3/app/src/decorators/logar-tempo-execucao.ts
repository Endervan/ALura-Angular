// para usa decorators tei add "experimentalDecorators": true la tsconfig.json
export function logarTempoExecucao() {

    // para ser padrao decorators tei receber 3 parametros
    // target ===> pode ser se decorators esta encima metodo estatico de uma classe,
    // pode ser função constutora,e se n estive metodo estatico ele vai ser proporType
    // property => dar nome metodo em string q foi decorado
    // PropertyDescriptor ===> tei referencia metodo original
    return function (
        target: any,
        property: string,
        descriptor: PropertyDescriptor
    ) {
        return descriptor;
    }

}
