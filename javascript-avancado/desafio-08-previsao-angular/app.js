const app = angular.module('previsaoApp', []);

// SERVICE: Gerencia a chamada para a API externa 
app.service('PrevisaoService', function($http) {
    const apiKey = "3ba6adfa43c9102bb3aa44da46f1f315"; 
    const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

    this.obterPrevisao = function(cidade) {
        return $http.get(baseUrl, {
            params: {
                q: cidade,
                appid: apiKey,
                units: 'metric', // Retorna em Celsius
                lang: 'pt_br'    
            }
        });
    };
});

// CONTROLLER: Faz a ponte entre o Service e o HTML
app.controller('PrevisaoController', function($scope, PrevisaoService) {
    $scope.titulo = "Rocket Weather";
    $scope.carregando = false;
    $scope.cidadeBusca = "";

    $scope.buscarTempo = function() {
        if (!$scope.cidadeBusca) return;

        $scope.carregando = true;
        $scope.erro = "";
        $scope.dadosTempo = null;

        PrevisaoService.obterPrevisao($scope.cidadeBusca)
            .then(function(response) {
                // Sucesso: os dados chegam em response.data
                $scope.dadosTempo = response.data;
            })
            .catch(function(error) {
                $scope.erro = "Cidade não encontrada ou erro na chave API.";
                console.error("Detalhes do erro:", error);
            })
            .finally(function() {
                $scope.carregando = false;
            });
    };
});