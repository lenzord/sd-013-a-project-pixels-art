const colors = document.getElementsByClassName('color');
const pixelBoard = document.getElementById('pixel-board');
const pixels = document.getElementsByClassName('pixel');
const clearButton = document.getElementById('clear-board');
const changeSizeBtn = document.getElementById('generate-board');
const sizeInput = document.getElementById('board-size');

// Função cor aleatória
function randomColor() {
  const colorR = Math.ceil(Math.random() * 255);
  const colorG = Math.ceil(Math.random() * 255);
  const colorB = Math.ceil(Math.random() * 255);
  return `rgb(${colorR}, ${colorG}, ${colorB})`;
}
// Colocando uma cor para cada div da paleta
function setColors() {
  for (let i = 0; i < colors.length; i += 1) {
    if (i === 0) {
      colors[i].style.backgroundColor = 'black';
    } else {
      colors[i].style.backgroundColor = randomColor();
    }
  }
}
setColors();

// Função para gerar colunas e linhas da tabela
// Função que gera células
function generateCell(size, row) {
  for (let i = 0; i < size; i += 1) {
    const cell = document.createElement('td');
    row.appendChild(cell);
    cell.classList = 'pixel';
  }
}
// Função que gera linhas
function generatePixelBoard(size) {
  for (let i = 0; i < size; i += 1) {
    const row = document.createElement('tr');
    pixelBoard.appendChild(row);
    generateCell(size, row);
  }
}
generatePixelBoard(5);

// Iniciar a página com a cor preta selecionada
function initializeBlack() {
  colors[0].classList.add('selected');
}
initializeBlack();

// Função para remover a classe selected
function removeSelected() {
  for (let i = 0; i < colors.length; i += 1) {
    if (colors[i].classList.contains('selected')) {
      colors[i].classList.remove('selected');
    }
  }
}
// Função para clicar e selecionar cor
function changeSelected(event) {
  removeSelected();
  event.target.classList.add('selected');
}
for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', changeSelected);
}

// Função para pintar as células
function selectedColor() {
  for (let i = 0; i < colors.length; i += 1) {
    if (colors[i].classList.contains('selected')) {
      return colors[i].style.backgroundColor;
    }
  }
}
function changePixelColor(event) {
  const ev = event;
  ev.target.style.backgroundColor = selectedColor();
}
function changePixelColorListener() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', changePixelColor);
  }
}
changePixelColorListener();

// Função para limpar quadro
function clearBoard() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}
clearButton.addEventListener('click', clearBoard);

// Função para usuário decidir o tamanho da board
function changeBoardSize() {
  if (sizeInput.value < 5) sizeInput.value = 5;
  if (sizeInput.value > 50) sizeInput.value = 50;

  if (sizeInput.value) {
    pixelBoard.innerHTML = '';
    generatePixelBoard(sizeInput.value);
    changePixelColorListener();
  } else {
    alert('Board inválido!');
    return false;
  }
}
changeSizeBtn.addEventListener('click', changeBoardSize);
