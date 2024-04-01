angular.module("textLimit").service("excelAPI", function ($http, config) {

    this.getExcelAPI = function () {
        return $http.get(config.baseUrl + "/rows")
    }

})
