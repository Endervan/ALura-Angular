angular.module("listaTelefonica").directive("uiAlert",function () {

    // forma restrict
    // A - diretiva restrita ao atribruto do elemento ex : <div ui-alert></div> ex: ng-click,ng-model,ng-class,ng-repeat(qlq diretiva ser para modifica ou agrega comportamento)
    // E - diretiva restrita ao elemento ex   <ui-alert></ui-alert> usa por si so
    // C - diretiva restrita a classe do elemento
    // M -  diretiva restita ao comentario do elemento

    return {
        templateUrl:"view/alert.html",
        replace:true,
        restrict:"AE",
        // scope diferente a variavel deixa se ser acessada
        scope:{
            // @ vincula o valor do atributo diretamente a uma propriedade do scope da diretiva
            // nome ta component for igual a da diretiva so coloca @
            title:"@",
            //  = cria vinculo bi-dimensional entre propriedade do scope template a uma propriedade do scope da diretiVA
            // = usado mais qnd passa variavel
            // message:"="
        },
        transclude:true // sempre quiser transcapular um conteudo dentro diretiva coloca ng-transclude

    }
})
