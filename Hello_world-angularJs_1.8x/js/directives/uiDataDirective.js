angular.module("listaTelefonica").directive("uiDate", function ($filter) {
    // link -> executada dps do template,podemos utilizar para interagir com o DOM ,
//   tratando eventos ou msm para defini comportamento ex evento como keyUp


    return {
        require: "ngModel", // acessa propriedade de api ngModel sera 4 parametro funcao link
        link: function (scope, element, attrs, ctrl) {
            var _formatDate = function (date) {
                date = date.replace(/[^0-9]+/g, ""); // limpa caracteres permitido somente numero
                if (date.length > 2) {
                    date = date.substring(0, 2) + "/" + date.substring(2)
                }
                if (date.length > 5) {
                    date = date.substring(0, 5) + "/" + date.substring(5, 9)
                }
                return date;
            }

            element.bind("keyup", function () { // sempre digita alguma coisa pego pelo $viewValue
                ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
                ctrl.$render(); // so funciona se usa
            });

            ctrl.$parsers.push(function (value) { // interagem com scope dps q sastifaz a condição
                if (value.length === 10) { // codicao  dd/MM/yyyy = 10
                    var dataArray = value.split("/"); // formate["yyyy","MM","dd"]
                    return new Date(dataArray[2],dataArray[1] -1,dataArray[0]).getTime(); // timestamp
                }
            });

            ctrl.$formatters.push(function (value) { // $formatters intercepta e  formata valores vem API
                return $filter("date")(value,"dd/MM/yyyy");
            })

        }

    };
})
