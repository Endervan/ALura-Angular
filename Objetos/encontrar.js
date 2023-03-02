const clientes = require("./clientes.json");


function encontar(lista,chave,valor) {
    return lista.find(item=>item[chave].includes(valor))
}
const encontrado = encontar(clientes,"nome","Kirby")
const encontrado2 = encontar(clientes,"telefone","5327428873")
console.log(encontrado,encontrado2)


