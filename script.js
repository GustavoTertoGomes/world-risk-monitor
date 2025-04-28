// Defina o valor manualmente
const risco = 61; // Altere aqui a porcentagem

// Função para carregar o risco
function carregarRisco() {
    const progressBar = document.getElementById('progress-bar');
    const percentage = document.getElementById('percentage');
    const riscoInfo = document.getElementById('risco-info');

    // Animar barra enchendo de 0 até risco atual
    let valorAtual = 0;
    const intervalo = setInterval(() => {
        if (valorAtual >= risco) {
            clearInterval(intervalo);
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
    }, 20);

    // Texto informativo
    riscoInfo.innerText = `Última atualização manual. Nível de risco global atual.`;
}

// Chamar a função ao carregar a página
carregarRisco();

