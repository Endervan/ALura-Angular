// usando service nao precisa returno pq ele ja e funcao construtura
angular.module("listaTelefonica").service("operadorasAPI", function ($http,config) {

    this.getOperadoras = function () {
        return $http.get(config.baseUrl + "/operadoras")
    }



})
