angular.module("listaTelefonica").config(function (serialGeneratorProvider, config) {
    // console.log(config.baseUrl)

    serialGeneratorProvider.setLength(8)
})
