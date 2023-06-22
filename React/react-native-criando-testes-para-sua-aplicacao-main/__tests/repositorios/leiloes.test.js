import {obtemLeiloes} from "../../src/repositorio/leilao";
import apiLeiloes from "../../src/servicos/apiLeiloes";

jest.mock('../../src/servicos/apiLeiloes');

const mockLeiloes = [{
    id: 1,
    nome: 'Leiloes',
    descricao: "descricao leilão"
}];

const mockRequisicao = (retorno) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: retorno
            })
        }, 200)
    });
}
const mockRequisicaoErro = () => {
    return new Promise((_,reject) => {
        setTimeout(() => {
            reject()
        }, 200)
    });
}


describe("repositorios/leiloes", () => {
    apiLeiloes.get.mockImplementation(() => mockRequisicao(mockLeiloes))
    describe("Obterleiloes", () => {
        it("deve retorna uma lista de leiloes", async () => {
            const leiloes = await obtemLeiloes();
            expect(leiloes).toEqual(mockLeiloes); // toEqual lista de arrays
        });
    });

    apiLeiloes.get.mockImplementation(() => mockRequisicaoErro())
    it("deve retorna uma lista vazia quando requisicao falha", async () => {
        const leiloes = await obtemLeiloes();
        expect(leiloes).toEqual([]); // toEqual lista de arrays
    });

});

// mockClear(): Limpa todos os registros das chamadas das funções;
// mockReset(): Faz tudo o que mockClear() faz, e também limpa as implementações e valores a serem retornados, voltando a ser como quando criamos uma função jest.fn();
// mockRestore(): Faz tudo o que mockClear() faz, e também volta a implementação de método original;
// mockImplementation(fn): Seta uma nova implementação para a função mockada. Há um atalho para esse método: jest.fn(implementation);
// mockReturnValue(value): Seta um valor fixo a ser retornado.
