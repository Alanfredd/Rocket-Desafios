class Registro {
    constructor(data, humor, observacao, habitos) {
        this.data = data;
        this.humor = parseInt(humor); 
        this.observacao = observacao || "";
        this.habitos = habitos || []; 
    }
}

// 2. Definição do Módulo Principal 
const app = angular.module('RocketHabitosApp', []);

// 3. Service Singleton para persistência em LocalStorage 
app.factory('DadosService', function() {
    const STORAGE_KEY = 'rocket_habitos_v1';

    return {
        salvar: function(registros) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(registros));
        },
        listar: function() {
            const dados = localStorage.getItem(STORAGE_KEY);
            return dados ? JSON.parse(dados) : [];
        }
    };
});

// 4. Controller Principal com Injeção de Dependência 
app.controller('MainController', ['$scope', 'DadosService', function($scope, DadosService) {
    
    // Inicialização dos dados vindos do Service
    $scope.registros = DadosService.listar();

    // Modelo para o formulário de novo registro (Two-Way Data Binding) 
    $scope.novoRegistro = {
        data: new Date(), // Data atual como padrão
        humor: "3",
        observacao: "",
        habitos: [
            { nome: 'Beber Água', concluido: false },
            { nome: 'Exercício', concluido: false },
            { nome: 'Estudo', concluido: false },
            { nome: 'Leitura', concluido: false },
            { nome: 'Dormir Cedo', concluido: false }
        ]
    };

    // Função para converter nível numérico em representação visual
    $scope.getEmoji = function(nivel) {
        const emojis = { 1: '😢', 2: '😐', 3: '😊', 4: '🤩' };
        return emojis[nivel] || '❓';
    };

    // Lógica de cálculo de progresso diário 
    $scope.calcularProgresso = function(habitos) {
        if (!habitos || habitos.length === 0) return 0;
        const concluidos = habitos.filter(h => h.concluido).length;
        return Math.round((concluidos / habitos.length) * 100);
    };

    // Lógica para média geral de todos os registros 
    $scope.getMediaGeral = function() {
        if ($scope.registros.length === 0) return 0;
        const totalProgresso = $scope.registros.reduce((acc, reg) => {
            return acc + $scope.calcularProgresso(reg.habitos);
        }, 0);
        return Math.round(totalProgresso / $scope.registros.length);
    };

    $scope.adicionarRegistro = function() {
        const dataParaSalvar = new Date($scope.novoRegistro.data);

        const registroParaSalvar = new Registro(
            dataParaSalvar,
            $scope.novoRegistro.humor,
            $scope.novoRegistro.observacao,
            angular.copy($scope.novoRegistro.habitos) 
        );

        $scope.registros.push(registroParaSalvar);
        DadosService.salvar($scope.registros);

        $scope.novoRegistro.habitos.forEach(h => h.concluido = false);
        $scope.novoRegistro.observacao = "";
        
        alert('Registro salvo com sucesso!');
    }; 
}]);