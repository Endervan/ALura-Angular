import {createContext, useEffect, useState} from "react";
import {pegarProduto, removerProduto, salvarProduto} from "../service/requisicoes/produtos";

export const ProdutosContext = createContext({});


export function ProdutosProvider({children}) {
    const [quantidade, setQuantidade] = useState(0);
    const [carrinho, setCarrinho] = useState([]);
    const [ultimosVistos, setUltimosVistos] = useState([]);
    const [precoTotal, setPrecoTotal] = useState(0);

    useEffect(async () => {
        const resultado = await pegarProduto();
        setCarrinho(resultado);
        setQuantidade(resultado.length)
    }, [])

    async function viuProduto(produto) {
        setQuantidade(quantidade + 1);
        let novoPrecoTotal = precoTotal + produto.preco;
        setPrecoTotal(novoPrecoTotal);

        // salvando produto api
        const resultado = await salvarProduto(produto)

        let novoCarrinho = carrinho;
        novoCarrinho.push(resultado);
        setCarrinho(novoCarrinho);

        // set so adiciona itens novos
        let novoUltimosVistos = new Set(ultimosVistos);
        novoUltimosVistos.add(produto);
        setUltimosVistos([...novoUltimosVistos])

    }

    async function removeProdutoItem(produto) {
        // remevendo produto api
        await removerProduto(produto);

        const resultado = await pegarProduto();
            setCarrinho(resultado);
            setQuantidade(resultado.length)
            let novoPrecoTotal = precoTotal - produto.preco;
            setPrecoTotal(novoPrecoTotal);


    }


    function finalizarCompra() {
        // para cada item nos ultimos vistos, apagar do banco de dados usando o removerProduto
        try {
            carrinho.forEach(async produto => {
                await removerProduto(produto);
            })
            setQuantidade(0);
            setPrecoTotal(0);
            setCarrinho([]);
            return 'Compra finalizada com sucesso!';
        } catch (erro) {
            return 'Erro ao finalizar a compra, tente novamente!';
        }
    }

    return (
        <ProdutosContext.Provider value={{
            quantidade,
            carrinho,
            setCarrinho,
            ultimosVistos,
            precoTotal,
            viuProduto,
            removeProdutoItem,
            finalizarCompra
        }}>
            {children}
        </ProdutosContext.Provider>
    )
}


