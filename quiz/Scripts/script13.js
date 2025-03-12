document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && (event.key === "u" || event.key === "U")) {
        event.preventDefault(); // Impede a ação padrão (abrir o código-fonte)
        window.location.href = "https://www.youtube.com/watch?v=f_k4gBdRXKA"; // Redireciona para o vídeo
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const respostaCorreta = "resposta-a"; // Defina a resposta correta
    const proximaPergunta = "pergunta14.html"; // Link para a próxima pergunta
    const indexPagina = "../index.html"; // Página inicial para respostas erradas

    const botoes = document.querySelectorAll(".resposta");

    botoes.forEach(botao => {
        botao.addEventListener("click", function () {
            botoes.forEach(a => a.disabled = true); // Desativa os botões após resposta

            if (this.id === respostaCorreta) {
                this.style.backgroundColor = "green";
                exibirAlerta("✅ Resposta correta!", proximaPergunta);
            } else {
                this.style.backgroundColor = "red";
                exibirAlerta("❌ Resposta errada! Voltando ao início...", indexPagina);
            }
        });
    });

    function exibirAlerta(mensagem, link) {
        setTimeout(() => {
            alert(mensagem);
            window.location.href = link;
        }, 500); // Pequeno delay para a cor mudar antes do alerta
    }
});
