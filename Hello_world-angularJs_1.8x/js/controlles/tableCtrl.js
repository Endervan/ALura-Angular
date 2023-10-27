// app.controller("tableCtrl", function (NgTableParams) {
//     var $ctrl = this;
//
//     // table ///////////////////////////////////////////////////
//     $ctrl.titulo = '';
//     $ctrl.filter = $ctrl.hide = false;
//     $ctrl.list = $ctrl.paginate = $ctrl.cols =  [];
//     $ctrl.quantPage = 10;
//
//     $ctrl.$onInit = function () {
//         $ctrl.initTable();
//     }
//
//     $ctrl.initTable = function () {
//         $ctrl.tableParams = new NgTableParams({
//             page: 1, // show first page
//             count: $ctrl.quantPage // count per page
//         }, {
//             counts: $ctrl.paginate,
//             filterDelay: 2000, // velocidade pesquisa
//             dataset: $ctrl.list
//         });
//     }
//     // table ///////////////////////////////////////////////////
//
//
// });
