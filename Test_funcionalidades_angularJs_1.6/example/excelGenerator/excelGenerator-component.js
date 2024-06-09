(function (angular) {

    "use strict";

    angular.module("excelGeneratorComponent", [])
        .controller("excelGeneratorController", excelGeneratorController)
        .component("excelGenerator", {
            templateUrl: '/example/excelGenerator/excelGenerator-component.html',
            bindings: {
                nameExcel: '@',
                headers: '<',
                columns: '<',
                rows: '=',
            },
            controllerAs: '$ctrl',
            controller: excelGeneratorController
        });

    excelGeneratorController.$inject = ['$rootScope', '$scope', "$timeout"];

    function excelGeneratorController($rootScope, $scope, $timeout) {
        var $ctrl = this;

        $ctrl.$onInit = function () {
            $ctrl.$onChanges = function (changes) {
                $scope.rows = [];
                if (changes.rows) {
                    $timeout(async function (updatedRows) {
                        $ctrl.rows = [changes.rows.currentValue || updatedRows];
                    }, 100, false, $ctrl.rows);
                    $scope.rows = $ctrl.rowsPush($ctrl.headers, $ctrl.columns, $ctrl.rows);
                }
            };
        };

        $ctrl.rowsPush = function (headers, colums, rows) {
            var data = [];
            data.push(headers, colums);
            // Adicionar dados limpo sem cache angular
            rows.forEach(function (row) {
                var values = [];
                for (var key in row) if (String(row[key]).indexOf('object:') === -1 && row.hasOwnProperty(key)) {
                    // formatando valores padroes e montando matrix
                    row[key] === 1 ? row[key] = 'sim' : 'não';
                    values.push(row[key]);
                }
                data.push(values);
            });
            return data
        }


        $scope.generateExcel = function () {
            //Converter para um objeto Excel
            if ($scope.rows.length === 0) return false
            console.log("dentro funcao", $scope.rows)
            var ws = XLSX.utils.aoa_to_sheet($scope.rows);
            delete ws['!cols'];// Remover a propriedade $$hashKey

            // Criar um objeto de pasta de trabalho
            var wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
            var wbout = XLSX.write(wb, {bookType: 'xlsx', type: 'binary'});

            // Salvar o arquivo usando a função saveAs do FileSaver.js
            saveAs(new Blob([s2ab(wbout)], {type: 'application/octet-stream'}), dataFormatada(new Date) + "_" + $ctrl.nameExcel + '.xlsx');
        };

        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
            return buf;
        }

        function dataFormatada(data) {
            // Extrair informações de data e hora
            var dia = ("0" + data.getDate()).slice(-2);
            var mes = ("0" + (data.getMonth() + 1)).slice(-2);
            var ano = data.getFullYear();
            var hora = ("0" + data.getHours()).slice(-2);
            var minuto = ("0" + data.getMinutes()).slice(-2);
            var segundo = ("0" + data.getSeconds()).slice(-2);

            // Formatar a data e hora conforme desejado
            var dataFormatada = dia + "_" + mes + "_" + ano;
            var horaFormatada = hora + ":" + minuto + ":" + segundo;
            return dataFormatada + "_" + horaFormatada;
        }

    }
})(angular);
