// para usa decorators tei add "experimentalDecorators": true la tsconfig.json
export function logarTempoExecucao(emSegundos: boolean = false) {

    // para ser padrao decorators tei receber 3 parametros
    // target ===> pode ser se decorators esta encima metodo estatico de uma classe,
    // pode ser função constutora,e se n estive metodo estatico ele vai ser proporType
    // property => dar nome metodo em string q foi decorado
    // PropertyDescriptor ===> tei referencia metodo original
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args: any[]) {
            let divisor = 1;
            let unidade = "millisegundos";
            if (emSegundos) {
                divisor = 1000;
                unidade = "segundos"
            }

            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(` ${propertyKey}, tempo de execução : ${(t2 - t1) / divisor}  ${unidade}`)
            retorno;

        };
        return descriptor;
    }

}
