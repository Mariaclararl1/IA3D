const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "Voce concorda com a IA?",
        alternativas:["Sim","Nao"]
    },
    {
        enunciado: "A IA é eficaz?",
        alternativas:["sim","Nao"]
    },
    {
        enunciado: "A IA é confiavel?",
        alternativas:["Sim","Nao"]
    }
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativa){
        const botao.Alternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
    }
}
