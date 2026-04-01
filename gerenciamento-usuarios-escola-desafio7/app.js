const app = angular.module('escolaApp', []);

app.service('UsuarioService', function($q, $timeout) {
    let usuarios = [
        { nome: "Davi Almeida", email: "davi@alpar.com", tipo: "Aluno", dataCadastro: new Date() }
    ];

    this.listar = function() {
        return usuarios;
    };

    // Método que retorna uma Promise 
    this.salvar = function(usuario) {
        let deferred = $q.defer();

        // Simula atraso de 2 segundos 
        $timeout(function() {
            usuario.dataCadastro = new Date();
            usuarios.push(usuario);
            deferred.resolve("Usuário cadastrado com sucesso!");
        }, 2000);

        return deferred.promise;
    };

    this.remover = function(index) {
        usuarios.splice(index, 1);
    };
});

app.controller('AppController', function($scope, UsuarioService) {
    $scope.usuarios = UsuarioService.listar();
    $scope.carregando = false; // Controle de loading
    $scope.mensagemSucesso = "";

    $scope.enviarFormulario = function() {
        if ($scope.userForm.$valid) {
            $scope.carregando = true;
            $scope.mensagemSucesso = "";

            // Chama o service que retorna a Promise
            UsuarioService.salvar(angular.copy($scope.novoUsuario))
                .then(function(resposta) {
                    $scope.mensagemSucesso = resposta;
                    $scope.novoUsuario = {}; // Limpa o formulário 
                    $scope.userForm.$setPristine(); // Reseta o estado de validação
                })
                .finally(function() {
                    $scope.carregando = false; // Desbloqueia o botão 
                });
        }
    };

    $scope.removerUsuario = function(index) {
        UsuarioService.remover(index);
    };
});

