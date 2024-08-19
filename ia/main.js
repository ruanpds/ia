const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O aumento do desemprego pode influenciar na prática de esportes e na poluição ambiental?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "porque com mais tempo livre, as pessoas podem se dedicar mais ao esporte, mas a falta de recursos financeiros pode limitar suas atividades, possivelmente levando a uma menor poluição."
            },
            {
                texto: "não",
                afirmacao: "porque a falta de emprego pode reduzir o acesso a atividades esportivas e aumentar o uso de recursos menos sustentáveis, aumentando a poluição.."
            }
        ]
    },
    {
        enunciado: "A prática regular de esportes pode ter um impacto no desemprego e na poluição ambiental?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "porque promover eventos esportivos pode gerar empregos e campanhas de sustentabilidade podem reduzir a poluição."
            },
            {
                texto: "não",
                afirmacao: "porque a prática de esportes não está diretamente ligada à criação de empregos e pode gerar poluição devido ao uso de recursos e infraestrutura."
            }
            ]
    },
    {
        enunciado: " A poluição ambiental pode influenciar o desemprego e a prática de esportes?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "porque a poluição pode afetar a saúde das pessoas, reduzindo sua capacidade de trabalho e a prática de esportes ao ar livre."
            },
            {
                texto: "nao",
                afirmacao: "porque a taxa de desemprego é mais influenciada por fatores econômicos do que ambientais, e a prática de esportes pode continuar em ambientes fechados."
            }
        ]
    },

    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();


mostraPergunta();