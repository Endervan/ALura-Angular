angular.module("listaTelefonica").filter("nameCapitalize", function () {
    return function (input) {
        if (!input) return ;
        var listaDeNomes = input.split(" "); // transforma array a cada espaco vazio
        var listaNomeFormatada = listaDeNomes.map(function (nome) {
            // charAt(0) => pega 1 caracteres da string // substring(1) => resultado restante string

            if (/(da|de)/.test(nome)) return nome;  // excessao caso for da ou de no meio do nome
            return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase()
        })
        return listaNomeFormatada.join(" ");

    }
})
