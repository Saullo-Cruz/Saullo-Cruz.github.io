function calcularEAtualizarSenha() {
    // Pega a data e hora atuais
    const agora = new Date();

    // Extrai ano, mês, dia, hora e minutos como números
    const ano = agora.getFullYear();
    const mes = agora.getMonth() + 1; // getMonth() é de 0 a 11
    const dia = agora.getDate();
    const hora = agora.getHours();
    const minutos = agora.getMinutes(); // Adicionado para exibir os minutos

    // --- CÁLCULO DA SENHA ---
    const resultado = ano - mes - dia - hora;
    document.getElementById('senha').textContent = resultado;


    // --- FORMATAÇÃO E EXIBIÇÃO DA DATA E HORA ---

    // Formata os números para sempre terem dois dígitos (ex: 09, 07)
    const diaFormatado = String(dia).padStart(2, '0');
    const mesFormatado = String(mes).padStart(2, '0');
    const horaFormatada = String(hora).padStart(2, '0');
    const minutosFormatados = String(minutos).padStart(2, '0');

    // Cria a string final de data e hora
    const textoDataHora = `data: ${diaFormatado}/${mesFormatado}/${ano} horas: ${horaFormatada}:${minutosFormatados}`;

    // Atualiza o novo elemento <p> na página
    document.getElementById('data-hora').textContent = textoDataHora;
}

// Roda a função pela primeira vez
calcularEAtualizarSenha();

// Configura um intervalo para recalcular a cada segundo.
// Isso garante que a data e hora também sejam atualizadas em tempo real.
setInterval(calcularEAtualizarSenha, 1000);
