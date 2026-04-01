const app = angular.module('escolaApp', []);

// Define o Controller principal 
app.controller('AppController', function($scope) {
    $scope.mensagem = "Bem-vindo ao sistema de cadastro escolar";
    $scope.usuario = {
        nome: "João",
        tipo: "Professor" 
    };
});