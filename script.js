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

let tema = "escuro";

// Parágrafo que contem a frase motivacional
const frase_motivacional = document.getElementById("frase");
// Botão que mostra uma nova frase motivacional para o usuário
const botao_frase = document.getElementById("nova-frase");
// Botão que alterna o tema da página entre claro/escuro
const botao_tema = document.getElementById("botao-tema");

botao_frase.addEventListener("click", function() {
    // Gera um índice aleatório válido para a lista de frases
    let num_random = Math.floor(Math.random() * frases.length);
    frase_motivacional.textContent = frases[num_random];
});

botao_tema.addEventListener("click", function() {
    console.log("Alternou o tema!");
    if (tema=="escuro") {
        tema = "claro";
        botao_tema.textContent = "☾";
    }
    else {
        tema = "escuro";
        botao_tema.textContent = "☀";
    }
});