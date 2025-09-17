function calcularEAtualizarSenha() {
    // Pega a data e hora atuais
    const agora = new Date();

    // Extrai ano, mês, dia e hora como números
    const ano = agora.getFullYear();
    const mes = agora.getMonth() + 1; // getMonth() é de 0 a 11
    const dia = agora.getDate();
    const hora = agora.getHours();

    // Calcula o resultado da equação
    const resultado = ano - mes - dia - hora;

    // Atualiza o resultado na página
    document.getElementById('senha').textContent = resultado;
}

// Roda a função pela primeira vez
calcularEAtualizarSenha();

// Configura um intervalo para recalcular a cada segundo.
// Isso garante que a senha mude exatamente quando a hora virar.
setInterval(calcularEAtualizarSenha, 1000);
