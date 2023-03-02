const clientes = require("./clientes.json");


function ordernar(lista, propriedade, ordem = "crescente") {
    const resultado = lista.sort((a, b) => {
        if (a[propriedade] > b[propriedade]) {
            return 1;
        } else if (a[propriedade] < b[propriedade]) {
            return -1
        } else {
            return 0
        }
    });
    if (ordem !== "crescente") {
        resultado.reverse();
    }
    return resultado;
}

const ordenaPeloNome = ordernar(clientes, "nome");
// const ordenadoInverso = ordenaPeloNome.reverse();

console.log(ordenaPeloNome)

