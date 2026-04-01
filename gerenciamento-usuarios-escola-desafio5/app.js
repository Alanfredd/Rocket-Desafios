const app = angular.module('escolaApp', []);

// Controller Pai: Gerencia os dados principais
app.controller('AppController', function($scope) {
    $scope.mensagem = "Bem-vindo ao sistema de cadastro escolar";

    $scope.usuarios = [
        { nome: "Davi Almeida", tipo: "Aluno", dataCadastro: new Date() },
        { nome: "Ana Costa", tipo: "Professor", dataCadastro: new Date() },
        { nome: "Lucas Silva", tipo: "Aluno", dataCadastro: new Date() },
        { nome: "Carla Souza", tipo: "Professor", dataCadastro: new Date() },
        { nome: "Bruno Rocha", tipo: "Aluno", dataCadastro: new Date() }
    ];
});

// Controller Filho: Para demonstrar escopos aninhados
app.controller('ListaController', function($scope) {
  
});