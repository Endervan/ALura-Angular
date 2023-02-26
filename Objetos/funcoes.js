const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
    saldo: 200,
    efetuaPagamento:function (valor) { // propriedade usa function
        if (valor > this.saldo){
            console.log("Saldo insufuciente")
        }else {
            this.saldo -= valor;
            console.log(`Pagamento realizado . novo saldo : ${this.saldo}`)
        }
    }
};


cliente.efetuaPagamento(190);

