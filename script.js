// script.js

// Defina aqui o nível de risco atual (mude aqui para atualizar o site!)
const currentRisk = 99; // Exemplo: 61%

const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');

// Função para animar a barra de progresso
function animateProgressBar() {
    let width = 0;
    const interval = setInterval(() => {
        if (width >= currentRisk) {
            clearInterval(interval);
            changeBarColor(width); // Garante que a cor final seja correta
        } else {
            width++;
            progressBar.style.width = width + '%';
            progressText.innerText = width + '%';
            changeBarColor(width);
        }
    }, 30); // velocidade da animação
}

// Função para mudar a cor da barra dependendo do risco
function changeBarColor(risk) {
    if (risk >= 85) {
        progressBar.style.backgroundColor = '#ff0000'; // Vermelho
    } else if (risk >= 70) {
        progressBar.style.backgroundColor = '#ffa500'; // Laranja
    } else {
        progressBar.style.backgroundColor = '#00ff00'; // Verde neon
    }
}

// Chama a função quando o site carrega
window.onload = animateProgressBar;

