// URL do seu arquivo JSON no GitHub (direto no "raw")
const url = 'https://raw.githubusercontent.com/GustavoTertoGomes/risco.json/main/risco.json';

// Função para carregar o risco
async function carregarRisco() {
    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();
        const risco = dados.risco;

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

        // Pequena explicação (pode ser dinâmica depois)
        riscoInfo.innerText = `Última atualização automática. Nível de risco global atual.`;

    } catch (erro) {
        console.error('Erro ao carregar o risco:', erro);
    }
}

// Chamar a função ao carregar a página
carregarRisco();

