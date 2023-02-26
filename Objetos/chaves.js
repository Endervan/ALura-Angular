const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
];

const chaveDoObj = Object.keys(cliente); // Object.keys retona arrays com todas as chaves do obj

console.log(chaveDoObj);

if (!chaveDoObj.includes("enderecos")){
    console.error("Erro . E necessario ter endereço")
}
