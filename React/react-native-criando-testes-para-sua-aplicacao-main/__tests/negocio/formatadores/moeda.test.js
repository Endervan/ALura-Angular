import {formataBrasileiroParaDecimal, formataDecimalParaReal} from "../../../src/negocio/formatadores/moeda";

describe("negocio/fomatadores/moeda", () => {
    describe("formataBrasileiroParaDecimal", () => {
        it("deve retorna 8.59 quando valor for '8,59'", () => {
            const resultado = formataBrasileiroParaDecimal("8,59");
            expect(resultado).toBe(8.59)
            console.log(resultado)
        });
    });


    describe("formataDecimalParaReal", () => {
        it("deve retorna R$ 8,59 quando valor for 8.59", () => {
            const resultado = formataDecimalParaReal(8.59);

            expect(resultado).toMatch(/R\$\s8,59/);
        });
    });
});

//
// Para checar se os valores nos testes são os esperados, usamos expects. Na biblioteca jest, existem várias formas de fazer isso, sendo as principais:
//
// toBe(): compara inteiros ou textos;
// toBeCloseTo(): compara pontos flutuantes obtidos através de operações matemáticas, pois, devido a arredondamentos, podem haver erros com toBe();
// toBeFalsy()/toBeTruthy(): compara valores falsos/verdadeiros em um contexto booleano. No caso de falsy, não apenas false será validado, mas valores como null, 0, '', undefined e NaN também. O restante dos valores é considerado truthy;
// toEqual(): compara objetos, verificando se as propriedades internas são iguais. Usar toBe() não retornará o mesmo resultado.


// Veja abaixo as funções globais mais comuns:

// describe('', () => {}): cria um contexto com uma descrição para todos os testes dentro da função;
// test('', () => {}): cria um teste com uma descrição que deve ser correspondida ao que o teste pretende testar.
// it('', () => {}): funciona exatamente igual ao test('', () => {}). É usado para começar a frase do teste, geralmente em inglês, onde a palavra it não precisa ser repetida. Exemplo: it('deve retornar verdadeiro') ou it('must return true');
// afterAll(() => {}): executa a função após todos os testes do seu contexto (arquivo ou describe) terminarem sua execução;
// beforeAll(() => {}): executa a função antes que todos os testes do seu contexto (arquivo ou describe) comecem sua execução;
// afterEach(() => {}): executa a função várias vezes, sempre que um teste do seu contexto (arquivo ou describe) terminarem sua execução;
// beforeEach(() => {}): executa a função várias vezes, sempre antes que um teste do seu contexto (arquivo ou describe) começar sua execução.
