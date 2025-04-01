document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && (event.key === "u" || event.key === "U")) {
        event.preventDefault(); 
        window.location.href = "https://www.youtube.com/watch?v=f_k4gBdRXKA"; 
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const respostaCorreta = "resposta-a"; 
    const proximaPergunta = "pergunta9.html"; 
    const indexPagina = "../Index.html"; 

    const botoes = document.querySelectorAll(".resposta");

    botoes.forEach(botao => {
        botao.addEventListener("click", function () {
            botoes.forEach(a => a.disabled = true); 

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
        }, 500); 
    }
});
