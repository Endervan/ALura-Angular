app.factory("errorInterceptor", function ($q,$location) {
    // $q => rejeita a promisse q foi feita

    return {
        responseError: function (rejection) {
            if (rejection.status === 404){
                $location.path("/error")
            }

            console.log(rejection)
            return $q.reject(rejection)
        }
    }

})
