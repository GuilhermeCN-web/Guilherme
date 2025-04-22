window.onload = function() {
    typeEffect('titulo', 'Olá mundo! 👋', 90, function() {
      typeEffect('paragrafo1', '💪🏻 Me especializando em desenvolvimento web', 60, function() {
        typeEffect('paragrafo2', 'Como quero me especializar nisto, criei meu próprio website para portifólio contendo informações sobre mim e minha carreira💼', 60);
          });
    });
  };
  
  // Função de digitação
  function typeEffect(id, text, speed, callback) {
    let element = document.getElementById(id);
    let i = 0;
    
    element.innerHTML = '';  // Limpa o conteúdo antes de digitar
  
    let interval = setInterval(function() {
      element.innerHTML += text.charAt(i);  // Adiciona um caractere por vez
      i++;
      
      if (i >= text.length) {
        clearInterval(interval);  // Para a animação quando o texto terminar
        if (callback) callback(); // Chama o próximo callback para o próximo texto
      }
    }, speed);  // A velocidade de digitação
  }
  document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll(".devicon");
    icons.forEach((icon, index) => {
        setTimeout(() => {
            icon.style.opacity = "1";
        }, index * 900); // Cada ícone aparece com um intervalo de 900ms
    });
});