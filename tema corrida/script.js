function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function acenderSequencia() {
  const faixas = document.querySelectorAll('.light-strip');

  // 1. Acende apenas as duas luzes inferiores da esquerda para a direita em vermelho
  for (let j = 0; j < 5; j++) {
const luz1 = faixas[j].children[2]; // Primeiro elemento (índice 2)
const luz2 = faixas[j].children[3]; // Segundo elemento (índice 3)

luz1.classList.add('vermelho');
luz2.classList.add('vermelho');

await delay(800);
}

  // 2. Apaga essas duas luzes vermelhas
  for (let j = 0; j < 5; j++) {
    faixas[j].children[3].classList.remove('vermelho');
    faixas[j].children[2].classList.remove('vermelho');
  }

  await delay(790);

  // 3. Acende todas as outras luzes (de cima) em verde
  for (let j = 0; j < faixas.length; j++) {
    for (let i = 0; i < 2; i++) { // de 0 até 2 = parte de cima
      faixas[j].children[i].classList.add('verde');
    }
  }
}

window.addEventListener("load", acenderSequencia);

window.onload = function() {
    typeEffect('titulo', 'Olá mundo! 👋', 90, function() {
      typeEffect('paragrafo1', '💪🏻 Me especializando em desenvolvimento web', 60, function() {
        typeEffect('paragrafo2', 'Como quero me especializar nisto, criei meu próprio website para portifólio contendo informações sobre mim e minha carreira💼', 60);
          typeEffect('titulo2', 'Sobre mim:', 600);
            typeEffect('paragrafo3', '📚 Aqui você encontrará projetos que refletem minha jornada de aprendizado.', 350);
              typeEffect('titulo3', 'Minhas Estatísticas no GitHub🐱:', 1000);
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