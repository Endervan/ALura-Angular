app.controller("listaTelefonicaCtrl", function ($rootScope, $scope, contatosAPI) {

    var result = [["clientes", "Cnpj", "Mci", "situacao"]];
    $scope.dadosExcel = [
        {
            codigo: 70,
            nome: "teste",
            nomeCadastro: 1212211,
            indicador: "S"
        } ,{
            codigo: 71,
            nome: "test2222222",
            nomeCadastro: 54545454,
            indicador: "N"
        }
    ];
    $scope.dadosExcel.map(function (obj) {
        return [obj.nome,obj.codigo,obj.nomeCadastro, obj.indicador === 'S' ? 'Ativo' : 'Inativo']
    }).forEach(function (item) {
         result.push(item)
    })


    console.log(result)




    // $scope.operadoras = [
    //     {nome: "OI", codigo: 14, categoria: "Celular", preco: 2},
    //     {nome: "Vivi", codigo: 15, categoria: "Celular", preco: 1},
    //     {nome: "Tim", codigo: 41, categoria: "Celular", preco: 2},
    //     {nome: "Gvt", codigo: 25, categoria: "Fixo", preco: 3},
    //     {nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 5},
    // ];

    // $filter == ("uppercase")("ender") iguais uppercaseFilter =  nome: uppercaseFilter("ender"), => filtro pelo controle controla e melhora perfomance

    $scope.contatos = [];
    // $scope.operadoras = [];
    // $scope.contato = {};
    // $scope.contato = {
    //     data: 1691118000000
    // };

    $rootScope.$on('clickRow', function (event, data) {
        // var dataRow = JSON.stringify(data)
        console.log("rootPai", $rootScope.clickRow)
        // console.log(" with message = " + dataRow);
    });

    // usando api pega contatos
    var carregarContatos = function () {
        contatosAPI.getContatos().then(function (response) {
            $scope.contatos = response.data;
            calcularImpostos($scope.contatos)
        }, function (response) {
            $scope.data = response.data || 'Request failed';
            $scope.error = "Não foi possivel carrega dados!!"
            console.log("error data", response.data, "error status ", response.status)
        });

        // carregando array tabela
        $scope.config = {
            // dados
            list: [
                {id1: 0, nome: 'louise', sobrenome: 'guimaraes'},
                {id1: 1, nome: 'vasco', sobrenome: 'rebeca'},
                {id1: 2, nome: 'vasco1', sobrenome: 'rebeca'},
                {id1: 3, nome: 'corinthians', sobrenome: 'rebeca'},
            ],
            list1: [
                {id1: 0, nome: 'Ender', sobrenome: 'Alves'},
                {id1: 1, nome: 'Manu', sobrenome: 'Cruz'},
            ],
            columns: [// colunas
                {
                    title: 'Codigo',
                    props: 'id1',
                    sortable: 'id1',
                    filter: {id1: "text"}, // oculta filtro se retira
                    show: true, // oculta coluna
                },
                {
                    title: 'Nomes',
                    props: 'nome',
                    sortable: 'nome',
                    show: true
                },
            ],
            columns1: [
                {
                    title: 'Codigo',
                    props: 'id1',
                    sortable: 'id1',
                    filter: {id1: "text"},
                    show: true
                },
                {
                    title: 'Nomes Superes',
                    props: 'nome',
                    sortable: 'nome',
                    filter: {nome: "text"},
                    show: true
                },
            ]
        }

    }

    // usando api pega operadoras
    // var carregarOperadoras = function () {
    //     operadorasAPI.getOperadoras().then(function (response) {
    //         $scope.operadoras = response.data;
    //     }, function (response) {
    //         $scope.data = response.data || 'Request failed';
    //         console.log("error data", response.data, "error status ", response.status)
    //     });
    // }

    // $scope.contatos = [
    //     {
    //         nome: uppercaseFilter("ender"),
    //         telefone: 61991411544,
    //         data: new Date(),
    //         cor: "blue",
    //         operadora: {nome: "OI", codigo: 14, categoria: "Celular"}
    //     },
    //     {
    //         nome: "manu",
    //         telefone: 6188888888,
    //         data: new Date(),
    //         cor: "yellow",
    //         operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}
    //     },
    //     {
    //         nome: "louise",
    //         telefone: 556565965656,
    //         data: new Date(),
    //         cor: "red",
    //         operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}
    //     },
    // ]

    // $scope.adicionarContato = function (contato) {
    //     contato.data = new Date();
    //     contato.serial = serialGenerator.generate();
    //     contato.cor = contato.operadora.cor  // recebendo cores do select
    //
    //     // contato.cor = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0'); // cores aleatorios
    //     $scope.contatos.push({nome: $scope.nome, telefone: $scope.telefone});// 1 -  jeito ruim evita le $scope
    //     // $scope.contatos.push({nome:nome,telefone: telefone}) // 2 - jeito melhorado passa pela funcão
    //     // angular.copy ou delete quebra ciclo interações
    //     // $scope.contatos.push(angular.copy(contato)) // 3 — recomendado salvando em memoria
    //
    //
    //     contatosAPI.save(contato).then(function (response) { // usando api post
    //         delete $scope.contato; // limpando formulario
    //         $scope.contatoForm.$setPristine(); // deixa estados de erro modo virgem
    //
    //         carregarContatos();// buscando lista atualizada back novamente umas das forma
    //     }, function (response) {
    //         $scope.data = response.data || 'Request failed';
    //         console.log("error data", response.data, "error status ", response.status)
    //     });
    //
    // }


    $scope.classe1 = "selecionado"
    $scope.classe2 = "negrito"

    $scope.apagarContato = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato
        });
        $scope.verificaContatoSelecionado($scope.contatos)
    };

    var counter = 0;
    $scope.verificaContatoSelecionado = function (contatos) {
        console.log(counter++)
        $scope.hasContatoSelecionado = contatos.some(function (contato) {
            return contato.selecionado
        });
    }

    $scope.ordenaPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    }


    // melhorando aplicacao e dimunuindo chamadas no DOM

    var calcularImpostos = function (contatos) {
        contatos.forEach(function (contato) {
            contato.operadora.precoComImposto = calcularImposto(contato.operadora.preco)
        });
    }

    // testando funcoes que deixa Sistema lento .muitas interações coma DOm
    var calcularImposto = function (preco) {
        var imposto = 1.2;
        return preco * imposto;
    }

    carregarContatos();
    // carregarOperadoras();


});
