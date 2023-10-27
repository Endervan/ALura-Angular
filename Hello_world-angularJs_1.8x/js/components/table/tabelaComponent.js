// angular.module('ngTable').run(['$templateCache', function ($templateCache) {
//     $templateCache.put('ng-table/filters/text.html', '<input type="text" ng-model="params.filter()[name]" ng-if="filter==\'text\'" placeholder="{{name}}" class="input-filter form-control"/>');
// }]);


angular.module('listaTelefonica')
    .component('bb.table', {
        controllerAs: '$ctrl',
        bindings: {
            titulo: '@',
            hide: '<',
            filter: '=',
            list: '<',
            columns: '<',
            paginate: '<',
            acoes:'=',
            details:'<',
            edit:'=',
        },
        controller: function ($rootScope,$scope,NgTableParams) {
            var $ctrl = this;

            // table ///////////////////////////////////////////////////
            $ctrl.titulo = '';
            $ctrl.filter = $ctrl.hide = $ctrl.acoes =$ctrl.details = $ctrl.edit = false;
            $ctrl.list = $ctrl.paginate = $ctrl.columns =  [];
            $ctrl.paginate =[5,10,15,20]
            $ctrl.quantPage = 10;

            $ctrl.$onInit = function () {
                console.log(this.list)
                $ctrl.initTable();
            }


            $ctrl.initTable = function () {
                $ctrl.tableParams = new NgTableParams({
                    page: 1, // show first page
                    count: $ctrl.quantPage // count per page
                }, {
                    counts: $ctrl.paginate,
                    filterDelay: 2000, // velocidade pesquisa
                    dataset: $ctrl.list
                });

                console.log($ctrl.tableParams)
            }

            $ctrl.clickRow = function (row){
                $rootScope.clickRow = row;
                $scope.$emit('clickRow', row);
            }

            // table ///////////////////////////////////////////////////
        }, template: `
            <style>
            .ng-table-pagination {
                    float: left;
                    margin-right: 5px;
            
                }
            /*    */
            /*    .ng-table th.filter .input-filter {*/
            /*        position: absolute;             */
            /*        width: 48%;*/
            /*        top: 6%;*/
            /*       */
            /*}*/
                
            </style>
                <div ng-hide="$ctrl.hide" style="position: relative">
               {{$id}}
                    <h2 class="page-header">{{$ctrl.titulo}}</h2>
                    <table ng-table-dynamic="$ctrl.tableParams with $ctrl.columns" show-filter="$ctrl.filter"   class="table text-center  table-colapse table-striped table-hover">
                        <tr ng-repeat="row in $data ">
                            <td ng-repeat="col in $columns">{{::row[col.props]}}</td>
                            <td  title="Detalhes" ng-if="$ctrl.details || $ctrl.edit">
                            <a ng-if="$ctrl.details" ng-click="$ctrl.clickRow(row)" title="Detalhes" href="">I</a>
                            <a ng-if="$ctrl.edit" ng-click="$ctrl.clickRow(row)" title="Edição" href="">E</a></td>
                        </tr>
                    </table>
             </div>
        `,
    })

