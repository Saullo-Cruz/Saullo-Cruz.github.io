function gerarEAtualizarSenha() {
    // Pega a data e hora atuais
    const agora = new Date();

    // Extrai ano, mês, dia e hora
    const ano = agora.getFullYear();
    // getMonth() retorna o mês de 0 a 11, por isso somamos 1
    const mes = String(agora.getMonth() + 1).padStart(2, '0');
    const dia = String(agora.getDate()).padStart(2, '0');
    const hora = String(agora.getHours()).padStart(2, '0');

    // Monta a senha no formato ano-mes-dia-hora
    const senhaGerada = `${ano}-${mes}-${dia}-${hora}`;

    // Atualiza o texto na página
    document.getElementById('senha').textContent = senhaGerada;
}

// Roda a função pela primeira vez para não ficar "gerando..."
gerarEAtualizarSenha();

// Configura um intervalo para verificar e atualizar a senha a cada segundo
// Isso garante que a senha mude exatamente quando a hora virar
setInterval(gerarEAtualizarSenha, 1000);
