const  dados = require("./cliente.json");

console.log(dados)
console.log(typeof dados);
const clienteEmString = JSON.stringify(dados); // transforma obj em string

console.log(clienteEmString);
console.log(typeof clienteEmString)

const objCliente = JSON.parse(clienteEmString);
console.log(objCliente)
console.log( typeof objCliente)
