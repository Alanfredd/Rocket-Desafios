const coresFundo = {
    "Fogo": "#FF4500", "Terra": "#4B2C20", "Água": "#1E90FF",
    "Ar": "#00CED1",    
    "Sol": "#FFD700",   
    "Lua": "#C0C0C0", "Vênus": "#FF69B4", "Júpiter": "#9370DB", 
    "Mercúrio": "#00FF7F", "Marte": "#B22222", "Saturno": "#4A4A4A"
};

let paginaAtual = 1;
const itensPorPagina = 9;
let filtroAtivo = null;

window.entrarNoGrimorio = function() {
    const portal = document.getElementById('portal-entrada');
    if (portal) {
        portal.classList.add('portal-sumir');
        setTimeout(() => { portal.style.display = 'none'; }, 1200);
    }
};
window.sortearEspirito = function() {

    const containerArvore = document.querySelector('.tree-wrapper');
    const circuloMalkuth = document.querySelector('.sephira.malkuth');
    
    containerArvore.classList.add('shake-container');
    
    circuloMalkuth.classList.add('brilho-malkuth');

    setTimeout(() => {
        containerArvore.classList.remove('shake-container');
        circuloMalkuth.classList.remove('brilho-malkuth');
        const sorteado = espiritos[Math.floor(Math.random() * espiritos.length)];
        
        document.getElementById('modalNome').innerText = "INFLUÊNCIA DO DIA: " + sorteado.nome;
        document.getElementById('modalImagem').src = sorteado.imagem;
        document.getElementById('modalDescricao').innerText = `Hoje você está sob a regência de ${sorteado.nome}. ${sorteado.descricao}`;
        
        const modalElemento = document.getElementById('modalDetalhes');
        const meuModal = new bootstrap.Modal(modalElemento);
        meuModal.show();
    }, 500); 
};

const espiritos = [
    { id: 1, nome: "Bael", titulo: "Rei", imagem: "assets/bael.png", descricao: "Governa o Leste. Torna o magista invisível.", elemento: "Fogo", planeta: "Sol" },
    { id: 2, nome: "Agares", titulo: "Duque", imagem: "assets/agares.png", descricao: "Ensina idiomas e causa terremotos.", elemento: "Terra", planeta: "Vênus" },
    { id: 3, nome: "Vassago", titulo: "Príncipe", imagem: "assets/vassago.png", descricao: "Declara coisas passadas e futuras.", elemento: "Água", planeta: "Júpiter" },
    { id: 4, nome: "Samigina", titulo: "Marquês", imagem: "assets/samigina.png", descricao: "Ensina as ciências liberais.", elemento: "Ar", planeta: "Lua" },
    { id: 5, nome: "Marbas", titulo: "Presidente", imagem: "assets/marbas.png", descricao: "Responde sobre coisas ocultas e cura doenças.", elemento: "Fogo", planeta: "Mercúrio" },
    { id: 6, nome: "Valefor", titulo: "Duque", imagem: "assets/valefor.png", descricao: "Um familiar que incita ao roubo.", elemento: "Terra", planeta: "Vênus" },
    { id: 7, nome: "Amon", titulo: "Marquês", imagem: "assets/amon.png", descricao: "Concilia controvérsias entre amigos.", elemento: "Água", planeta: "Lua" },
    { id: 8, nome: "Barbatos", titulo: "Duque", imagem: "assets/barbatos.png", descricao: "Entende o canto das aves e conhece o futuro.", elemento: "Terra", planeta: "Vênus" },
    { id: 9, nome: "Paimon", titulo: "Rei", imagem: "assets/paimon.png", descricao: "Ensina todas as artes e ciências.", elemento: "Água", planeta: "Sol" },
    { id: 10, nome: "Buer", titulo: "Presidente", imagem: "assets/buer.png", descricao: "Ensina filosofia moral e natural.", elemento: "Fogo", planeta: "Mercúrio" },
    { id: 11, nome: "Gusion", titulo: "Duque", imagem: "assets/gusion.png", descricao: "Discerne o passado e dá honra e dignidade.", elemento: "Água", planeta: "Vênus" },
    { id: 12, nome: "Sitri", titulo: "Príncipe", imagem: "assets/sitri.png", descricao: "Inflama o amor entre os sexos.", elemento: "Terra", planeta: "Júpiter" },
    { id: 13, nome: "Beleth", titulo: "Rei", imagem: "assets/beleth.png", descricao: "Causa todo o amor que possa existir.", elemento: "Terra", planeta: "Sol" },
    { id: 14, nome: "Leraje", titulo: "Marquês", imagem: "assets/leraje.png", descricao: "Causa batalhas e disputas.", elemento: "Fogo", planeta: "Lua" },
    { id: 15, nome: "Eligos", titulo: "Duque", imagem: "assets/eligos.png", descricao: "Descobre coisas ocultas e guerras futuras.", elemento: "Água", planeta: "Vênus" },
    { id: 16, nome: "Zepar", titulo: "Duque", imagem: "assets/zepar.png", descricao: "Une pessoas em amor ou as torna estéreis.", elemento: "Terra", planeta: "Vênus" },
    { id: 17, nome: "Botis", titulo: "Presidente", imagem: "assets/botis.png", descricao: "Fala de coisas passadas e reconcilia amigos.", elemento: "Água", planeta: "Mercúrio" },
    { id: 18, nome: "Bathin", titulo: "Duque", imagem: "assets/bathin.png", descricao: "Conhece virtudes de ervas e transporta homens.", elemento: "Terra", planeta: "Vênus" },
    { id: 19, nome: "Sallos", titulo: "Duque", imagem: "assets/sallos.png", descricao: "De natureza pacífica, causa o amor.", elemento: "Terra", planeta: "Vênus" },
    { id: 20, nome: "Purson", titulo: "Rei", imagem: "assets/purson.png", descricao: "Conhece tesouros e a criação do mundo.", elemento: "Terra", planeta: "Sol" },
    { id: 21, nome: "Marax", titulo: "Conde", imagem: "assets/marax.png", descricao: "Ensina astronomia e ciências liberais.", elemento: "Terra", planeta: "Marte" },
    { id: 22, nome: "Ipos", titulo: "Príncipe", imagem: "assets/ipos.png", descricao: "Torna os homens audazes e espirituosos.", elemento: "Água", planeta: "Júpiter" },
    { id: 23, nome: "Aim", titulo: "Duque", imagem: "assets/aim.png", descricao: "Dá respostas sobre assuntos privados.", elemento: "Fogo", planeta: "Vênus" },
    { id: 24, nome: "Naberius", titulo: "Marquês", imagem: "assets/naberius.png", descricao: "Torna homens astutos em todas as artes.", elemento: "Ar", planeta: "Lua" },
    { id: 25, nome: "Glasya-Labolas", titulo: "Presidente", imagem: "assets/glasya.png", descricao: "Ensina artes instantaneamente.", elemento: "Fogo", planeta: "Mercúrio" },
    { id: 26, nome: "Bune", titulo: "Duque", imagem: "assets/bune.png", descricao: "Muda o lugar dos mortos e dá riqueza.", elemento: "Terra", planeta: "Vênus" },
    { id: 27, nome: "Ronove", titulo: "Marquês", imagem: "assets/ronove.png", descricao: "Ensina a retórica e línguas.", elemento: "Ar", planeta: "Lua" },
    { id: 28, nome: "Berith", titulo: "Duque", imagem: "assets/berith.png", descricao: "Transforma metais em ouro.", elemento: "Fogo", planeta: "Vênus" },
    { id: 29, nome: "Astaroth", titulo: "Duque", imagem: "assets/astaroth.png", descricao: "Dá respostas sobre coisas ocultas.", elemento: "Terra", planeta: "Vênus" },
    { id: 30, nome: "Forneus", titulo: "Marquês", imagem: "assets/forneus.png", descricao: "Torna os homens amados por inimigos.", elemento: "Água", planeta: "Lua" },
    { id: 31, nome: "Foras", titulo: "Presidente", imagem: "assets/foras.png", descricao: "Ensina as virtudes de ervas e pedras.", elemento: "Terra", planeta: "Mercúrio" },
    { id: 32, nome: "Asmoday", titulo: "Rei", imagem: "assets/asmoday.png", descricao: "Ensina aritmética e astronomia.", elemento: "Ar", planeta: "Sol" },
    { id: 33, nome: "Gaap", titulo: "Presidente", imagem: "assets/gaap.png", descricao: "Pode tornar homens insensíveis.", elemento: "Água", planeta: "Mercúrio" },
    { id: 34, nome: "Furfur", titulo: "Conde", imagem: "assets/furfur.png", descricao: "Cria o amor e comanda raios.", elemento: "Fogo", planeta: "Marte" },
    { id: 35, nome: "Marchosias", titulo: "Marquês", imagem: "assets/marchosias.png", descricao: "Guerreiro forte e fiel ao magista.", elemento: "Fogo", planeta: "Lua" },
    { id: 36, nome: "Stolas", titulo: "Príncipe", imagem: "assets/stolas.png", descricao: "Ensina astronomia e pedras preciosas.", elemento: "Ar", planeta: "Júpiter" },
    { id: 37, nome: "Phenex", titulo: "Marquês", imagem: "assets/phenex.png", descricao: "Grande poeta com voz doce.", elemento: "Ar", planeta: "Lua" },
    { id: 38, nome: "Halphas", titulo: "Conde", imagem: "assets/halphas.png", descricao: "Constrói torres e fornece armas.", elemento: "Ar", planeta: "Marte" },
    { id: 39, nome: "Malphas", titulo: "Presidente", imagem: "assets/malphas.png", descricao: "Constrói casas e conhece pensamentos.", elemento: "Ar", planeta: "Mercúrio" },
    { id: 40, nome: "Raum", titulo: "Conde", imagem: "assets/raum.png", descricao: "Rouba tesouros e destrói cidades.", elemento: "Ar", planeta: "Marte" },
    { id: 41, nome: "Focalor", titulo: "Duque", imagem: "assets/focalor.png", descricao: "Poder sobre águas e ventos.", elemento: "Água", planeta: "Vênus" },
    { id: 42, nome: "Vepar", titulo: "Duque", imagem: "assets/vepar.png", descricao: "Guia navios e governa as águas.", elemento: "Água", planeta: "Vênus" },
    { id: 43, nome: "Sabnock", titulo: "Marquês", imagem: "assets/sabnock.png", descricao: "Constrói cidades e torres fortificadas.", elemento: "Fogo", planeta: "Lua" },
    { id: 44, nome: "Shax", titulo: "Marquês", imagem: "assets/shax.png", descricao: "Tira a visão e audição a pedido.", elemento: "Ar", planeta: "Lua" },
    { id: 45, nome: "Vine", titulo: "Rei", imagem: "assets/vine.png", descricao: "Descobre coisas ocultas e bruxas.", elemento: "Água", planeta: "Sol" },
    { id: 46, nome: "Bifrons", titulo: "Conde", imagem: "assets/bifrons.png", descricao: "Ensina astrologia e geometria.", elemento: "Terra", planeta: "Marte" },
    { id: 47, nome: "Vual", titulo: "Duque", imagem: "assets/vual.png", descricao: "Dá o amor de mulheres e conta o futuro.", elemento: "Água", planeta: "Vênus" },
    { id: 48, nome: "Haagenti", titulo: "Presidente", imagem: "assets/haagenti.png", descricao: "Transforma metais em ouro.", elemento: "Terra", planeta: "Mercúrio" },
    { id: 49, nome: "Crocell", titulo: "Duque", imagem: "assets/crocell.png", descricao: "Descobre fontes de águas termais.", elemento: "Água", planeta: "Vênus" },
    { id: 50, nome: "Furcas", titulo: "Cavaleiro", imagem: "assets/furcas.png", descricao: "Ensina filosofia e astronomia.", elemento: "Ar", planeta: "Saturno" },
    { id: 51, nome: "Balam", titulo: "Rei", imagem: "assets/balam.png", descricao: "Dá respostas sobre passado e futuro.", elemento: "Terra", planeta: "Sol" },
    { id: 52, nome: "Alloces", titulo: "Duque", imagem: "assets/alloces.png", descricao: "Ensina astronomia e traz familiares.", elemento: "Fogo", planeta: "Vênus" },
    { id: 53, nome: "Camio", titulo: "Presidente", imagem: "assets/camio.png", descricao: "Entende o canto dos pássaros.", elemento: "Ar", planeta: "Mercúrio" },
    { id: 54, nome: "Murmur", titulo: "Duque", imagem: "assets/murmur.png", descricao: "Obriga almas de mortos a responderem.", elemento: "Água", planeta: "Vênus" },
    { id: 55, nome: "Orobas", titulo: "Príncipe", imagem: "assets/orobas.png", descricao: "Fiel ao magista, dá respostas verdadeiras.", elemento: "Água", planeta: "Júpiter" },
    { id: 56, nome: "Gremory", titulo: "Duque", imagem: "assets/gremory.png", descricao: "Conta sobre tesouros escondidos.", elemento: "Água", planeta: "Vênus" },
    { id: 57, nome: "Ose", titulo: "Presidente", imagem: "assets/ose.png", descricao: "Torna o homem sábio em ciências.", elemento: "Terra", planeta: "Mercúrio" },
    { id: 58, nome: "Amy", titulo: "Presidente", imagem: "assets/amy.png", descricao: "Conhecimento em astrologia.", elemento: "Fogo", planeta: "Mercúrio" },
    { id: 59, nome: "Orias", titulo: "Marquês", imagem: "assets/orias.png", descricao: "Ensina a virtude das estrelas.", elemento: "Ar", planeta: "Lua" },
    { id: 60, nome: "Vapula", titulo: "Duque", imagem: "assets/vapula.png", descricao: "Ensina artes, ofícios e filosofia.", elemento: "Ar", planeta: "Vênus" },
    { id: 61, nome: "Zagan", titulo: "Rei", imagem: "assets/zagan.png", descricao: "Transforma líquidos e dá sabedoria.", elemento: "Terra", planeta: "Sol" },
    { id: 62, nome: "Valac", titulo: "Presidente", imagem: "assets/valac.png", descricao: "Dá respostas sobre tesouros e serpentes.", elemento: "Terra", planeta: "Mercúrio" },
    { id: 63, nome: "Andras", titulo: "Marquês", imagem: "assets/andras.png", descricao: "Semeia discórdias e perigos.", elemento: "Fogo", planeta: "Lua" },
    { id: 64, nome: "Haures", titulo: "Duque", imagem: "assets/haures.png", descricao: "Fala da criação e destrói inimigos.", elemento: "Fogo", planeta: "Vênus" },
    { id: 65, nome: "Andrealphus", titulo: "Marquês", imagem: "assets/andrealphus.png", descricao: "Ensina geometria perfeitamente.", elemento: "Ar", planeta: "Lua" },
    { id: 66, nome: "Cimejes", titulo: "Marquês", imagem: "assets/cimejes.png", descricao: "Ensina gramática e descobre perdidos.", elemento: "Terra", planeta: "Lua" },
    { id: 67, nome: "Amdusias", titulo: "Duque", imagem: "assets/amdusias.png", descricao: "Proporciona excelente música.", elemento: "Ar", planeta: "Vênus" },
    { id: 68, nome: "Belial", titulo: "Rei", imagem: "assets/belial.png", descricao: "Distribui apresentações e favores.", elemento: "Terra", planeta: "Sol" },
    { id: 69, nome: "Decarabia", titulo: "Marquês", imagem: "assets/decarabia.png", descricao: "Conhece as virtudes de aves e pedras.", elemento: "Ar", planeta: "Lua" },
    { id: 70, nome: "Seere", titulo: "Príncipe", imagem: "assets/seere.png", descricao: "Passa por toda a Terra num momento.", elemento: "Ar", planeta: "Júpiter" },
    { id: 71, nome: "Dantalion", titulo: "Duque", imagem: "assets/dantalion.png", descricao: "Conhece os pensamentos de todos.", elemento: "Água", planeta: "Vênus" },
    { id: 72, nome: "Andromalius", titulo: "Conde", imagem: "assets/andromalius.png", descricao: "Descobre todas as maldades e tesouros.", elemento: "Fogo", planeta: "Marte" }
];


function filtrarPorTitulo(titulo) {
    filtroAtivo = titulo;
    paginaAtual = 1;
    renderizarGoetia(espiritos.filter(e => e.titulo === titulo));
}

function resetarFiltros() {
    filtroAtivo = null;
    paginaAtual = 1;
    renderizarGoetia(espiritos);
}

function renderizarGoetia(lista) {
    const container = document.getElementById("container-cards");
    if (!container) return;
    container.innerHTML = "";
    
    const inicio = (paginaAtual - 1) * itensPorPagina;
    const itensExibidos = lista.slice(inicio, inicio + itensPorPagina);

    itensExibidos.forEach(esp => {
        container.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card h-100 text-light" onclick="mostrarDetalhes(${esp.id})">
                    <img src="${esp.imagem}" class="card-img-top" alt="${esp.nome}">
                    <div class="card-body text-center">
                        <h5 class="text-warning">${esp.nome}</h5>
                        <p class="titulo-hierarquia">${esp.titulo}</p>
                        <div class="d-flex justify-content-center gap-2">
                            <span class="badge" style="background:${coresFundo[esp.planeta]}">${esp.planeta}</span>
                            <span class="badge" style="background:${coresFundo[esp.elemento]}">${esp.elemento}</span>
                        </div>
                    </div>
                </div>
            </div>`;
    });
    renderizarBotoes(lista.length);
}

function renderizarBotoes(total) {
    const pag = document.getElementById("paginacao");
    if (!pag) return;
    pag.innerHTML = "";
    const numPaginas = Math.ceil(total / itensPorPagina);
    if (numPaginas <= 1) return;
    for (let i = 1; i <= numPaginas; i++) {
        pag.innerHTML += `<li class="page-item ${i === paginaAtual ? 'active' : ''}"><button class="page-link bg-dark text-warning border-secondary" onclick="mudarPagina(${i})">${i}</button></li>`;
    }
}

function mudarPagina(n) {
    paginaAtual = n;
    const lista = filtroAtivo ? espiritos.filter(e => e.titulo === filtroAtivo) : espiritos;
    renderizarGoetia(lista);
    window.scrollTo(0, 0);
}

function mostrarDetalhes(id) {
    const esp = espiritos.find(e => e.id === id);
    if (!esp) return;
    document.getElementById('modalNome').innerText = `${esp.nome} - ${esp.titulo}`;
    document.getElementById('modalImagem').src = esp.imagem;
    document.getElementById('modalDescricao').innerText = esp.descricao;
    new bootstrap.Modal(document.getElementById('modalDetalhes')).show();
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarGoetia(espiritos);
    
    document.getElementById('campo-busca')?.addEventListener('input', (e) => {
        const termo = e.target.value.toLowerCase();
        const filtrados = espiritos.filter(esp => esp.nome.toLowerCase().includes(termo));
        renderizarGoetia(filtrados);
    });
});
function sortearEspirito() {
    resetarFiltros();

    const indiceSorteado = Math.floor(Math.random() * espiritos.length);
    const sorteado = espiritos[indiceSorteado];

    const modalNome = document.getElementById('modalNome');
    modalNome.innerHTML = `<span class="text-info">INFLUÊNCIA DO DIA:</span> ${sorteado.nome}`;
    
    document.getElementById('modalImagem').src = sorteado.imagem;
    document.getElementById('modalDescricao').innerText = `Hoje você está sob a regência de ${sorteado.nome}. ${sorteado.descricao}`;
    
    const meuModal = new bootstrap.Modal(document.getElementById('modalDetalhes'));
    meuModal.show();
}