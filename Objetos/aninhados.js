const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};

cliente.endereco = [{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
}];

cliente.endereco.push({
    rua: "R. Joseph Climber",
    numero: 404,
    apartamento: false,
    complemento: "ap 500",
})

const listApartamentoAlugado = cliente.endereco.filter(a=>a.apartamento === true)

console.log(listApartamentoAlugado)
