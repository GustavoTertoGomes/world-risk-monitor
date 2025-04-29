const progressBar = document.getElementById('progress');
const progressText = document.getElementById('progress-text');
const atualizarBtn = document.getElementById('atualizar-btn');

let currentRisk = 61; // Risco inicial

function animateProgressBar() {
    let progress = 0;
    const interval = setInterval(() => {
        if (progress >= currentRisk) {
            clearInterval(interval);
        } else {
            progress++;
            progressBar.style.width = `${progress}%`;
            progressText.innerText = `${progress}%`;

            // Mudando a cor da barra dependendo do progresso
            if (progress >= 80) {
                progressBar.style.backgroundColor = '#ff0000'; // Vermelho
            } else if (progress >= 60) {
                progressBar.style.backgroundColor = '#ffff00'; // Amarelo
            } else {
                progressBar.style.backgroundColor = '#00ff00'; // Verde
            }
        }
    }, 20);
}

// Carrega o risco ao entrar na página
document.addEventListener("DOMContentLoaded", () => {
    animateProgressBar();
});

// Ao clicar no botão, reinicia a barra com o mesmo valor ou novo valor
atualizarBtn.addEventListener('click', () => {
    // Se quiser manter o mesmo valor:
    progressBar.style.width = '0%';
    progressText.innerText = '0%';
    animateProgressBar();

    // Se quiser gerar valor aleatório entre 50 e 80%, use este bloco em vez do acima:
    // currentRisk = Math.floor(Math.random() * 31) + 50;
    // progressBar.style.width = '0%';
    // progressText.innerText = '0%';
    // animateProgressBar();
});
