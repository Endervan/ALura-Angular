import useListaLeiloes from "../../src/hooks/useListaLeiloes";
import {act, renderHook} from "@testing-library/react-hooks";
import {obtemLeiloes} from "../../src/repositorio/leilao";

jest.mock('../../src/repositorio/leilao');

const mockLeiloes = [{
    id: 1,
    nome: 'Leiloes',
    descricao: "descricao leilão"
}];

const mockLeiloesAtualizada = [
    {
        id: 1,
        nome: 'Leiloes',
        descricao: "descricao leilão"
    }, {
        id: 2,
        nome: 'Leiloes2',
        descricao: "descricao leilão2"
    }
];


describe('/hooks/useListaLeiloes', () => {
    it('deve retorna lista de leiloes e uma funcao  para atualizar', async () => {

        obtemLeiloes.mockImplementation(() => mockLeiloes);

        const {result, waitForNextUpdate} = renderHook(() => useListaLeiloes());
        expect(result.current[0]).toEqual([]);
        await waitForNextUpdate;
        expect(result.current[0]).toEqual(mockLeiloes);

        obtemLeiloes.mockImplementation(()=>mockLeiloesAtualizada);


        await act(()=>result.current[1]());
        expect(result.current[0]).toEqual(mockLeiloesAtualizada)



    });
})
