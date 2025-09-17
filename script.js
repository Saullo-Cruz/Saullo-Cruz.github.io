// 1. Pega os elementos do HTML
const gerarBtn = document.getElementById('gerar-btn');
const qrCodeContainer = document.getElementById('qrcode-container');
const dadosParaQRCodeInput = document.getElementById('dados-qrcode');

// 2. Função para gerar o QR Code
function gerarQRCode() {
    // Pega o valor digitado no campo "QR CODE A SER GERADO"
    const dados = dadosParaQRCodeInput.value;

    // Se o campo estiver vazio, não faz nada
    if (!dados) {
        alert("Por favor, insira os dados para gerar o QR Code.");
        return;
    }

    // Limpa qualquer QR Code anterior
    qrCodeContainer.innerHTML = '';
    
    // Usa a biblioteca para criar o QR Code
    new QRCode(qrCodeContainer, {
        text: dados,
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}

// 3. Adiciona um "escutador" que chama a função quando o botão é clicado
gerarBtn.addEventListener('click', gerarQRCode);
