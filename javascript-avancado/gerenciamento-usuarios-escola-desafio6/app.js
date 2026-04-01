const app = angular.module('escolaApp', []);

// SERVICE: Responsável pela manipulação dos dados 
app.service('UsuarioService', function() {
    let usuarios = [
        { nome: "Davi Almeida", tipo: "Aluno", dataCadastro: new Date() },
        { nome: "Ana Costa", tipo: "Professor", dataCadastro: new Date() }
    ];

    this.listar = function() {
        return usuarios;
    };

    this.adicionar = function(usuario) {
        if (usuario.nome && usuario.tipo) {
            usuario.dataCadastro = new Date();
            usuarios.push(usuario);
        }
    };

    this.remover = function(index) {
        usuarios.splice(index, 1);
    };
});

app.controller('AppController', function($scope, UsuarioService) {
    $scope.mensagem = "Gerenciamento com Services e Injeção";
    $scope.usuarios = UsuarioService.listar();
    $scope.adicionarNovo = function() {
        UsuarioService.adicionar(angular.copy($scope.novoUsuario));
        $scope.novoUsuario = {};
    };

    $scope.removerUsuario = function(index) {
        UsuarioService.remover(index);
    };
});