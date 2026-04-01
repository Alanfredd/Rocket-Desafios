document.getElementById('validadorForm').addEventListener('submit', function(event) {
    // Impede o envio do formulário e o refresh da página
    event.preventDefault(); 

    //  Definição das Expressões Regulares (RegEx)
    const regexNome = /^[A-Za-zÀ-ÿ\s]+$/; // Letras e espaços, incluindo acentos 
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Formato padrão de e-mail 
    const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/; // Formato 000.000.000-00 

    // Função de Validação
    function validar(idCampo, regex, nomeCampo) {
        const input = document.getElementById(idCampo);
        const msg = document.getElementById('msg-' + idCampo);
        const valor = input.value;

        // Uso do método test() para validar o campo
        if (regex.test(valor)) {
            input.className = 'input-valido';
            msg.textContent = 'Válido';
            msg.className = 'status-msg text-valido';
            return true;
        } else {
            input.className = 'input-invalido';
            msg.textContent = 'Inválido: ' + nomeCampo;
            msg.className = 'status-msg text-invalido';
            return false;
        }
    }

    // Execução das validações
    const isNomeOk = validar('nome', regexNome, 'Nome');
    const isEmailOk = validar('email', regexEmail, 'E-mail');
    const isCpfOk = validar('cpf', regexCPF, 'CPF');

    // Bloqueio de envio final
    if (isNomeOk && isEmailOk && isCpfOk) {
        alert("Todos os dados estão corretos! Formulário validado.");
    } else {
        console.log("Falha na validação de campos.");
    }
});
