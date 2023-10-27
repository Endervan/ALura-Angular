app.controller("novoContatoCtrl", function ($scope, contatosAPI, operadorasAPI, $location, operadoras, serialGenerator) {

    $scope.operadoras = [];

    // usando direto routeConfig.js com metodo resolve
    $scope.operadoras = operadoras.data;


    // usando api pega operadoras
    // var carregarOperadoras = function () {
    //     operadorasAPI.getOperadoras().then(function (response) {
    //         $scope.operadoras = response.data;
    //     }, function (response) {
    //         $scope.data = response.data || 'Request failed';
    //         console.log("error data", response.data, "error status ", response.status)
    //     });
    // }

    $scope.adicionarContato = function (contato) {
        contato.data = new Date();
        contato.serial = serialGenerator.generate();
        contato.cor = contato.operadora.cor


        contatosAPI.save(contato).then(function (response) {
            delete $scope.contato; // limpando formulario
            $scope.contatoForm.$setPristine(); // deixa estados de erro modo virgem
            $location.path("/contatos");

        }, function (response) {
            $scope.data = response.data || 'Request failed';
            console.log("error data", response.data, "error status ", response.status)
        });

    }

    // carregarOperadoras();

});
