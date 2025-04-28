// Defina o valor manualmente
const risco = 61; // Altere aqui a porcentagem de risco

// Mensagens simuladas de análise global
const mensagens = [
    "Conectando a servidores globais...",
    "Coletando dados de segurança internacional...",
    "Analisando movimentações militares...",
    "Verificando estabilidade política global...",
    "Calculando risco global atual..."
];

function mostrarMensagens(callback) {
    const riscoInfo = document.getElementById('risco-info');
    let index = 0;

    const intervaloMensagens = setInterval(() => {
        riscoInfo.innerText = mensagens[index];
        index++;
        if (index >= mensagens.length) {
            clearInterval(intervaloMensagens);
            setTimeout(callback, 500);
        }
    }, 1000);
}

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

            if (valorAtual < 70) {
                progressBar.style.backgroundColor = '#00ff00';
            } else if (valorAtual < 85) {
                progressBar.style.backgroundColor = '#ffff00';
            } else {
                progressBar.style.backgroundColor = '#ff0000';
            }
        }
    }, 20);
}

window.onload = () => {
    mostrarMensagens(carregarRisco);
};
