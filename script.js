// --- SCRIPT DO GERADOR DE SENHA (EXISTENTE) ---
function calcularEAtualizarSenha() {
    const agora = new Date();
    const ano = agora.getFullYear();
    const mes = agora.getMonth() + 1;
    const dia = agora.getDate();
    const hora = agora.getHours();
    const resultado = ano - mes - dia - hora;
    document.getElementById('senha').textContent = resultado;
}

// Roda a função de senha
calcularEAtualizarSenha();
setInterval(calcularEAtualizarSenha, 1000);


// --- NOVO SCRIPT DO GERADOR DE QR CODE ---

// 1. Pega os elementos do HTML
const gerarBtn = document.getElementById('gerar-btn');
const qrCodeContainer = document.getElementById('qrcode-container');

// 2. Função para gerar o QR Code
function gerarQRCode() {
    // Pega os valores digitados nos campos
    const bomba = document.getElementById('bomba').value;
    const bico = document.getElementById('bico').value;
    const valor = document.getElementById('valor').value;
    const frentista = document.getElementById('frentista').value;
    
    // Junta todos os dados em um único texto (formato JSON)
    const dadosParaQRCode = JSON.stringify({
        bomba: bomba,
        bico: bico,
        valor: valor,
        frentista: frentista
    });

    // Limpa qualquer QR Code anterior
    qrCodeContainer.innerHTML = '';
    
    // Usa a biblioteca para criar o QR Code
    new QRCode(qrCodeContainer, {
        text: dadosParaQRCode,
        width: 128,
        height: 128,
    });
}

// 3. Adiciona um "escutador" que chama a função quando o botão é clicado
gerarBtn.addEventListener('click', gerarQRCode);
