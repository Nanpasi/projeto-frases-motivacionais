// ========================= FUNÇÕES =========================
function temaClaro() {
    // Alterando o valor da variável
    tema = "claro";
    // Alterando o ícone do botão de tema
    botao_tema.textContent = "☾";
    // Alterando a cor de fundo da página
    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--fundo-claro");
    // Alterando a cor do card principal da página (content)
    card.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--fundo-card-claro");
    // Alterando a cor do parágrafo da frase motivacional
    frase_motivacional.style.color = getComputedStyle(document.documentElement).getPropertyValue("--paragrafo-claro");

    // ALTERANDO A COR DO BOTÃO DE TEMA
    botao_tema.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--fundo-escuro");
    botao_tema.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue("--fundo-escuro");
    botao_tema.style.color = getComputedStyle(document.documentElement).getPropertyValue("--paragrafo-escuro");
}

function temaEscuro() {
    // Alterando o VALOR da variável
    tema = "escuro";
    // Alterando o ÍCONE do botão de tema
    botao_tema.textContent = "☀";
    // Alterando a COR DE FUNDO da página
    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--fundo-escuro");
    // Alterando a cor do CARD PRINCIPAL da página (content)
    card.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--fundo-card-escuro");
    // Alterando a cor do PARÁGRAFO da frase motivacional
    frase_motivacional.style.color = getComputedStyle(document.documentElement).getPropertyValue("--paragrafo-escuro");

    // ALTERANDO A COR DO BOTÃO DE TEMA
    botao_tema.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--paragrafo-escuro");
    botao_tema.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue("--paragrafo-escuro");
    botao_tema.style.color = getComputedStyle(document.documentElement).getPropertyValue("--fundo-escuro");
}

// ========================= VARIÁVEIS =========================
// Lista de frases motivacionais que vão ser exibidas aleatoriamente
const frases = [
    "O progresso importa mais que a perfeição.",
    "Não compare seu começo com o caminho de outra pessoa.",
    "O único caminho impossível é aquele que você nunca tenta.",
    "Seu futuro é construído pelas escolhas que você faz hoje.",
    "Cada dia é uma nova chance de fazer melhor.",
    "Tenha coragem para sair da zona de conforto.",
    "O importante não é ir rápido, é não parar.",
    "Você não precisa ser perfeito, apenas continuar.",
    "Não desista antes de tentar.",
    "Pequenos passos também levam longe.",
    "Acredite no seu potencial.",
    "Um passo de cada vez.",
    "Cada desafio é uma oportunidade para crescer."
];

// Flag que guarda o valor do tema atual
let tema = "escuro";
// Card com o conteúdo principal da página
const card = document.getElementById("content");
// Parágrafo que contem a frase motivacional
const frase_motivacional = document.getElementById("frase");
// Botão que mostra uma nova frase motivacional para o usuário
const botao_frase = document.getElementById("nova-frase");
// Botão que alterna o tema da página entre claro/escuro
const botao_tema = document.getElementById("botao-tema");

// ========================= EVENTOS =========================
botao_frase.addEventListener("click", function() {
    // Gera um índice aleatório válido para a lista de frases
    let num_random = Math.floor(Math.random() * frases.length);
    frase_motivacional.textContent = frases[num_random];
});

botao_tema.addEventListener("click", function() {
    console.log("Alternou o tema!");
    if (tema=="escuro") {
        temaClaro();
    }
    else {
        temaEscuro();
    }
});

botao_tema.addEventListener("mouseenter", function() {
    botao_tema.style.transform = "scale(1.15)";
    if (tema=="escuro") {
        botao_tema.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--paragrafo-escuro");
        botao_tema.style.color = getComputedStyle(document.documentElement).getPropertyValue("--fundo-escuro");
    }
    else {
        botao_tema.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--fundo-escuro");
        botao_tema.style.color = getComputedStyle(document.documentElement).getPropertyValue("--paragrafo-escuro");
    }
});

botao_tema.addEventListener("mouseleave", function() {
    botao_tema.style.transform = "scale(1)";
    if (tema=="escuro") {
        botao_tema.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--fundo-escuro");
        botao_tema.style.color = getComputedStyle(document.documentElement).getPropertyValue("--paragrafo-escuro");
    }
    else {
        botao_tema.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--fundo-claro");
        botao_tema.style.color = getComputedStyle(document.documentElement).getPropertyValue("--fundo-escuro");
    }
});