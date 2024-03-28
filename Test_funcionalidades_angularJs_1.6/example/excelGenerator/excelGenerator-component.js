(function(angular) {

    "use strict";

    angular.module("excelGeneratorComponent", [])
        .controller("excelGeneratorController", excelGeneratorController)
        .component("excelGenerator", {
            // templateUrl: 'C:\\Users\\ealves\\Desktop\\BancoDoBrasil\\front\\ALura-Angular\\Test_funcionalidades_angularJs_1.6\\example\\excelGenerator\\excelGenerator-component.html',
            templateUrl: '\\Test_funcionalidades_angularJs_1.6\\example\\excelGenerator\\excelGenerator-component.html',
            bindings: {
                nameExcel: '@',
                headers: '<',
                columns: '<',
                rows: '<',
            },
            controllerAs: '$ctrl',
            controller: excelGeneratorController
        });

    excelGeneratorController.$inject = ['$rootScope'];

    function excelGeneratorController($rootScope) {
        var $ctrl = this;
        $ctrl.nameExcel = dataFormatada(new Date) + $ctrl.nameExcel

        $rootScope.$on('novoDadosExcel', function(_event, rows) {
            $ctrl.rows = rows;
        });


        $ctrl.generateExcel = function() {
            var data = [];
            data.push($ctrl.headers, $ctrl.colums);

            // Adicionar dados limpo sem cache angular
            $ctrl.rows.forEach(function(row) {
                var values = [];
                for (var key in row) if ( row[key].indexOf('object:') === -1 && row.hasOwnProperty(key) ){
                    values.push(row[key]);
                }
                data.push(values);
            });

            //Converter para um objeto Excel
            var ws = XLSX.utils.aoa_to_sheet(data);
            delete ws['!cols'];// Remover a propriedade $$hashKey

            // Criar um objeto de pasta de trabalho
            var wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
            var wbout = XLSX.write(wb, {bookType: 'xlsx', type: 'binary'});

            // Salvar o arquivo usando a função saveAs do FileSaver.js
            saveAs(new Blob([s2ab(wbout)], {type: 'application/octet-stream'}), ($ctrl.nameExcel ? $ctrl.nameExcel : 'data') + '.xlsx');
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