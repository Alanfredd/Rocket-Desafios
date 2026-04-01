const usuarios = [
    new Aluno("Davi", "davi@alpar.com.br","123", "Aluno De TI"),
    new Professor("Crowley", "professor@thelema.com.br", "456", "JavaScrpit Avançado")
];

function logar() {
    const email = document.getElementById("email").value.trim();
const senha = document.getElementById("senha").value.trim();
    const erroElemento = document.getElementById("erro-login");

    const usuarioEncontrado = usuarios.find(u => u.email === email && u.senha === senha);

    if (usuarioEncontrado) {
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
        window.location.href = "perfil.html";
    } else {
        erroElemento.textContent = "Email ou senha incorretos.";
    }
}

    
