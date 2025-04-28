const progressBar = document.getElementById('progress');
const currentStatus = document.getElementById('current-status');
const lastUpdated = document.getElementById('last-updated');

// Atualizar risco (você pode mudar essa lógica manualmente)
let riskPercentage = 61;  // Comece com 61%, conforme nossa análise atual
let statusText = "Instabilidade Crescente";  // Você pode mudar isso dependendo do risco

// Atualizando a barra de progresso e o status
function updateRiskMonitor() {
    progressBar.style.width = `${riskPercentage}%`;
    currentStatus.innerText = statusText;
    lastUpdated.innerText = new Date().toLocaleString();
}

// Chama a função de atualização ao carregar a página
updateRiskMonitor();

