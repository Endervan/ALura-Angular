angular.module("ui", []);

// templateRef
// grunt => ferramentas automacao de buid
angular.module("ui").run(function ($templateCache) {
    $templateCache.put("view/accordion.html",
        '<div class="ui-accordion-title" ng-click="open()">{{title}}</div><div class="ui-accordion-content" ng-show="isOpened" ng-transclude></div>')
})

angular.module("ui").directive("uiAccordions", function () {

    return {
        controller: function ($scope, $element, $attrs) {
            var accordions = [];

            this.registerAccordion = function (accordion) {
                accordions.push(accordion)
            }

            this.closeAll = function () {
                accordions.forEach(function (accordion) {
                    accordion.isOpened = false;
                })
            }
        }
    }

});
angular.module("ui").directive("uiAccordion", function () {
    return {
        transclude: true,
        templateUrl: "view/accordion.html",
        scope: {
            title: "@"
        },
        require: "^uiAccordions", // ^cria vinculo entre as diretivas

        link: function (scope, element, attrs, ctrl) {

            // ex pegando funcao da outra diretiva
            ctrl.registerAccordion(scope)
            scope.open = function () {
                ctrl.closeAll();
                scope.isOpened = true
            }

        }

    }
})
