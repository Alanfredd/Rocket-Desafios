const dadosBrutos = JSON.parse(localStorage.getItem("usuarioLogado"));
const mural = document.getElementById("mural-perfil");

if (dadosBrutos) {
    let user;
    if (dadosBrutos.turma) {
        user = new Aluno(dadosBrutos.nome, dadosBrutos.email, null, dadosBrutos.turma);
    } else { 
        user = new Professor(dadosBrutos.nome, dadosBrutos.email, null, dadosBrutos.materias);
    }
    console.log(user.exibirPerfil());
    mural.innerHTML += `<p>${user.exibirPerfil()}</p>`;
}

