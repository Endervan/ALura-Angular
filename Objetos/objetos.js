const listaCPFs = [111111, 2222221, 3333333];
const informacoesPessoa = ["nome","Jose","idade",32,"CPF","1111111111"]


const  Cliente ={
    idade: 32,
    nome: "Jose",
    cpf: "1122233345",
    email: "andre@dominio.com",
}

const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
};

console.log(
    `O nome do cliente é ${cliente.nome}
     e essa pessoa tem ${cliente.idade} anos.`);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);
