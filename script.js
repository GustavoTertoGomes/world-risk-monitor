// Defina o valor manualmente
const risco = 58; // Altere aqui a porcentagem de risco

// Lista de mensagens para simular coleta de dados
const mensagens = [
    "Conectando a servidores globais...",
    "Coletando dados de segurança internacional...",
    "Analisando movimentações militares...",
    "Verificando estabilidade política global...",
    "Calculando risco global atual..."
];

// Função para mostrar as mensagens simuladas
function mostrarMensagens(callback) {
    const riscoInfo = document.getElementById('risco-info');
    let index = 0;

    const intervaloMensagens = setInterval(() => {
        riscoInfo.innerText = mensagens[index];
        index++;
        if (index >= mensagens.length) {
            clearInterval(intervaloMensagens);
            setTimeout(callback, 500); // Pequena pausa antes de começar a carregar a barra
        }
    }, 1000); // Troca de mensagem a cada 1 segundo
}

// Função para carregar o risco na barra de progresso
function carregarRisco() {
    const progressBar = document.getElementById('progress-bar');
    const percentage = document.getElementById('percentage');
    const riscoInfo = document.getElementById('risco-info');

    let valorAtual = 0;
    const intervalo = setInterval(() => {
        if (valorAtual >= risco) {
            clearInterval(intervalo);
            riscoInfo.innerText = `Última atualização manual. Nível de risco global atual: ${risco}%`;
        } else {
            valorAtual++;
            progressBar.style.width = valorAtual + '%';
            percentage.innerText = valorAtual + '%';

            // Mudança de cor conforme porcentagem
            if (valorAtual < 70) {
                progressBar.style.backgroundColor = '#00ff00'; // verde neon
            } else if (valorAtual < 85) {
                progressBar.style.backgroundColor = '#ffff00'; // amarelo
            } else {
                progressBar.style.backgroundColor = '#ff0000'; // vermelho
            }
        }
    }, 20); // velocidade da animação da barra
}

// Quando a página carregar, primeiro mostra as mensagens, depois a barra
window.onload = () => {
    mostrarMensagens(carregarRisco);
};
