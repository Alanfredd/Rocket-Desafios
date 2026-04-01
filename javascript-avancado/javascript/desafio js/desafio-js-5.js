let usuarios = []
let continuar = true;
while (continuar) {
    let opcao = prompt("Escolha uma opção: 1 - Adicionar usuário, 2 - Remover usuario, 3 - Listar usuario, 4 -  Sair");

    if (opcao === "4") {
        continuar = false;
        alert("Programa encerrado");
    }
else if (opcao === "3") {
    console.table(usuarios);
}
else if (opcao === "1") {
    let nome = prompt("Digite o nome:");
    let idade = prompt("Digite a idade:");
    let email = prompt("Digite o email :");
    let emailJaExiste = false;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === email) {      
            emailJaExiste = true;
            break;
        }
    }
            if (emailJaExiste) {   
                alert("Este e-mail já esta cadastrado!");
            } else {    
                let novoUsuario = {
                    nome: nome,
                    idade: idade,
                    email: email            
                };
                usuarios.push(novoUsuario);
                console.log("Usuário adicionado com sucesso!");
            }
        }
    
    else if (opcao === "2") {
    let emailParaRemover = prompt("Digite o email da conta que deseja remover:");
    let encontrado = false;

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === emailParaRemover) {
            
            usuarios.splice(i, 1); 
            encontrado = true;
            alert("Usuário removido com sucesso!");
            break; // 
        }
    }
    

    if (!encontrado) {
        alert("Email não encontrado em nossa base de dados.");
    }
}
}
    


