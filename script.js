for (let i = 0; i < 400; i++) {
    let star = document.createElement('div');
    star.classList.add('star');
    star.style.top = Math.random() * 100 + 'vh';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.animationDuration = Math.random() * 2 + 1 + 's';  // Definir a duração da animação para cada estrela
    document.body.appendChild(star);
}

window.onload = function() {
    typeEffect('titulo', 'Olá mundo! 👋', 70, function() {
      typeEffect('paragrafo1', '💪🏻 Me especializando em desenvolvimento web', 40, function() {
        typeEffect('paragrafo2', 'Como quero me especializar nisto, criei meu próprio website para portifólio contendo informações sobre mim e minha carreira💼', 40);
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
  
  
  