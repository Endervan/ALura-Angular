const clientes = require("./clientes.json");


function filtarApartamentoSemComplemento(lista) {
    return lista.filter(cliente=>{
        return (cliente.endereco.apartamento &&
        !cliente.endereco.hasOwnProperty('complemento'))
        // hasOwnProperty verifica se existe aquela propriedade no obj
    })
}

const filtrados = filtarApartamentoSemComplemento(clientes);

console.log(filtrados)

