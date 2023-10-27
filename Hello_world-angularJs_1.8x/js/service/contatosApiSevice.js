// usando  factory
angular.module("listaTelefonica").factory("contatosAPI", function ($http, config) {


    // modo private add _ na frente nome
    var _getContatos = function () {
        return $http.get(config.baseUrl + "/contatos")
    }

    var _getContato = function (id) {
        return $http.get(config.baseUrl + "/contatos/" + id)
    }

    var _save = function (contato) {
        return $http.post(config.baseUrl + "/contatos", contato)
    }

    return {
        getContatos: _getContatos,
        getContato: _getContato,
        save: _save,
    }

})
