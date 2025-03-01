// Data de nascimento
const dataNascimento = new Date('2006-07-23');  

// Data de início da carreira (experiência profissional)
const inicioCarreira = new Date('2022-02-01');  

// Função para calcular a idade
function calcularIdade() {
  const dataAtual = new Date();
  let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
  const mesAtual = dataAtual.getMonth();
  const diaAtual = dataAtual.getDate();

  // Verifica se o aniversário já passou neste ano
  if (mesAtual < dataNascimento.getMonth() || (mesAtual === dataNascimento.getMonth() && diaAtual < dataNascimento.getDate())) {
    idade--;
  }

  return idade;
}

// Função para calcular o tempo de experiência
function calcularTempoExperiencia() {
  const dataAtual = new Date();
  let tempoExperiencia = dataAtual.getFullYear() - inicioCarreira.getFullYear();
  const mesAtual = dataAtual.getMonth();
  const diaAtual = dataAtual.getDate();

  // Verifica se o aniversário profissional já passou neste ano
  if (mesAtual < inicioCarreira.getMonth() || (mesAtual === inicioCarreira.getMonth() && diaAtual < inicioCarreira.getDate())) {
    tempoExperiencia--;
  }

  return tempoExperiencia;
}

// Função para atualizar a idade e os anos de experiência no HTML
function atualizarInformacoes() {
  const idadeElement = document.getElementById('idade');
  const experienciaElement = document.getElementById('anosExperiencia');
  
  const idade = calcularIdade();
  const anosExperiencia = calcularTempoExperiencia();

  idadeElement.textContent = `Minha idade: ${idade} anos`;
  experienciaElement.textContent = `Tempo de experiência: ${anosExperiencia} anos`;
}

// Atualiza as informações assim que a página for carregada
window.onload = atualizarInformacoes;
