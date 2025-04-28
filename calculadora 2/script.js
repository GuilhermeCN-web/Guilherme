// Variáveis para armazenar o total em execução e o buffer de entrada
let runningTotal = 0; // Guarda o resultado das operações
let buffer = "0"; // Armazena os números digitados
let previousOperator; // Guarda o último operador usado
let parenthesisStack = []; // Pilha para gerenciar os parênteses

// Seleciona a tela onde os números e resultados serão exibidos
const screen = document.querySelector('.screen');

// Função principal para lidar com cliques nos botões
function buttonClick(value) {
    if (isNaN(value)) { // Se não for um número, trata como símbolo (operador ou comando)
        handleSymbol(value);
    } else { // Se for um número, adiciona ao buffer
        handleNumber(value);
    }
    screen.innerText = buffer; // Atualiza a tela com o novo buffer
}

// Função para tratar símbolos e operadores
function handleSymbol(symbol) {
    screen.classList.remove("result"); // Remove a cor ao digitar novo número
    switch (symbol) {
        case 'C': // Limpa a tela e reseta valores
            buffer = '0';
            runningTotal = 0;
            previousOperator = null;
            parenthesisStack = []; // Limpa a pilha dos parênteses
            break;
        case '( )':
            buffer = '(';
            break;
        case '.': 
            if (!buffer.includes('.')) { // Só adiciona se ainda não houver um ponto decimal no número atual
                buffer += '.';
            }
            break;     
        case '+/-':
            if (buffer !== "0") { 
                buffer = (parseFloat(buffer) * -1).toString(); // Multiplica por -1 para inverter o sinal
            }
            break;
        case '=':
            if (previousOperator === null) {
                return;
            }
            flushOperation(parseFloat(buffer)); // Realiza a operação
            previousOperator = null;
            buffer = runningTotal.toString(); // Exibe o resultado corretamente
            runningTotal = 0;
            screen.classList.add("result"); // Adiciona a classe para mudar a cor
            break;                        
        case '←': // Apaga o último caractere do buffer
            if (buffer.length === 1) {
                buffer = "0"; // Se houver apenas um caractere, reseta para "0"
            } else {
                buffer = buffer.substring(0, buffer.length - 1); // Remove o último caractere
            }
            break;
        case '+':
        case '-':
        case 'x':
        case '÷':
            handleMath(symbol); // Chama a função para lidar com operações matemáticas
            break;
    }
}

// Função para lidar com parênteses
function handleParentheses(symbol) {
    if (symbol === '( )') {
        if (buffer !== '0') { // Quando é aberto um parêntese, armazena o número atual
            parenthesisStack.push(buffer); // Empilha o número atual
            buffer = "0"; // Reseta o buffer
        } else if (parenthesisStack.length > 0) { // Quando fecha um parêntese
            flushOperation(parseFloat(buffer)); // Resolve a operação interna
            buffer = parenthesisStack.pop().toString(); // Retorna ao valor anterior
        }
    }
}

// Função para lidar com operações matemáticas
function handleMath(symbol) {
    if (buffer === '0') { // Se o buffer estiver vazio, ignora
        return;
    }
    const floatBuffer = parseFloat(buffer); // Converte corretamente para número decimal
    if (runningTotal === 0) {
        runningTotal = floatBuffer;
    } else {
        flushOperation(floatBuffer); // Agora sempre atualiza antes de limpar
    }
    previousOperator = symbol;
    buffer = '0'; // Reseta o buffer para entrada do próximo número
}

// Função que executa a operação matemática pendente
function flushOperation(floatBuffer) {
    switch (previousOperator) {
        case '+':
            runningTotal = parseFloat((runningTotal + floatBuffer).toFixed(10));
            break;
        case '-':
            runningTotal = parseFloat((runningTotal - floatBuffer).toFixed(10));
            break;
        case 'x':
            runningTotal = parseFloat((runningTotal * floatBuffer).toFixed(10));
            break;
        case '÷':
            if (floatBuffer !== 0) { // Evita divisão por zero
                runningTotal = parseFloat((runningTotal / floatBuffer).toFixed(10));
            } else {
                alert("Erro: Divisão por zero!");
                runningTotal = 0;
            }
            break;
    }
}

// Função para tratar entrada de números
function handleNumber(numberString) {
    if (buffer === "0") {
        buffer = numberString; // Substitui o "0" inicial pelo número digitado
    } else {
        buffer += numberString; // Adiciona o número ao buffer
    }
}

// Função de inicialização da calculadora
function init() {
    document.querySelectorAll('.calc-button').forEach(button => {
        button.addEventListener('click', function(event) {
            buttonClick(event.target.innerText); // Captura o valor do botão clicado
        });
    });
}

// Chama a função de inicialização
init();
