class CentralDeLuzes {
  static instancia;

  constructor() {
    if (CentralDeLuzes.instancia) {
      return CentralDeLuzes.instancia;
    }
    CentralDeLuzes.instancia = this;
  }

  static getInstance() {
    if (!CentralDeLuzes.instancia) {
        CentralDeLuzes.instancia = new CentralDeLuzes();
    }
    return CentralDeLuzes.instancia;
  }

  ligar(comodo) {
    const divComodo = document.getElementById(comodo);
    if (divComodo) { 
        this.atualizarStatus(comodo, "ligada");
    }
  }

  desligar(comodo) {
    const divComodo = document.getElementById(comodo);
    if (divComodo) {
        divComodo.style.backgroundColor = "gray"; 
        this.atualizarStatus(comodo, "desligada");
    }
  }

  atualizarStatus(comodo, estado) {
    console.log(`Luz do ${comodo} ${estado}`); 
    document.getElementById("status").innerText = `Luz do ${comodo} ${estado}`;
  }
}

const botoes = document.querySelectorAll('.btn-luz');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const central = CentralDeLuzes.getInstance();
        const comodo = botao.getAttribute('data-comodo');
        const acao = botao.getAttribute('data-acao');

        if (acao === 'ligar') {
            central.ligar(comodo);
        } else {
            central.desligar(comodo);
        }
    });
});