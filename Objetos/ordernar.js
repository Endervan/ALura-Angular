const clientes = require("./clientes.json");


function ordernar(lista, propriedade) {
    return lista.sort((a, b) => {
        if (a[propriedade] > b[propriedade]) {
            return 1;
        } else if (a[propriedade] < b[propriedade]) {
            return -1
        } else {
            return 0
        }
    });
}

const ordenaPeloNome = ordernar(clientes,"nome");

console.log(ordenaPeloNome)

