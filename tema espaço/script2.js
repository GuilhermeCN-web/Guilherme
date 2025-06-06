for (let i = 0; i < 400; i++) {
    let star = document.createElement('div');
    star.classList.add('star');
    star.style.top = Math.random() * 100 + 'vh';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.animationDuration = Math.random() * 2 + 1 + 's';  // Definir a duração da animação para cada estrela
    document.body.appendChild(star);
}

  window.onload = function() {
  typeEffect('nome', 'Guilherme Corrêa Narcizo', 80, function() {
    typeEffect('about', 'Com uma jornada de desenvolvimento pessoal marcada por momentos de introspecção e crescimento, que me transformou num homem resiliente, determinado e inteligente.', 70);
    typeEffect('cidade', 'Itu/SP;', 80, function() {
      typeEffect('dev', 'Desenvolvedor de tecnologias front-end Jr, usando', 50, function() {;
        typeEffect('HTML', 'HTML,', 50, function() {
          typeEffect('CSS', 'CSS,', 50, function() {
            typeEffect('JS', 'JavaScript,', 50, function() {
              typeEffect('boot', 'Bootstrap,', 50, function() {
                typeEffect('angular', 'Angular,', 50, function() {
                  typeEffect('react', 'React,', 50, function() {
                    typeEffect('e', ' e', 50, function() {
                      typeEffect('typescript', ' TypeScript;', 50, function() {
                        typeEffect('meu', 'Meu', 80, function() {
                          typeEffect('E', 'E', 50, function() {
                            typeEffect('m', 'm', 50, function() {
                              typeEffect('a', 'a', 50, function() {
                                typeEffect('i', 'i', 50, function() {
                                  typeEffect('l', 'l', 50, function() {
                                    typeEffect(':', ':', 50, function() {
                                      typeEffect('gui', 'guilherme.', 50, function() {
                                        typeEffect('na', 'narcizo@fatec.', 50, function() {
                                          typeEffect('sp', 'sp.gov.br;', 50, function() {
                                            typeEffect('linkedin', ' Meu LinkedIn;', 80, function() {
                                              typeEffect('git', ' Meu GitHub;', 50);
                                            });
                                          });
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
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