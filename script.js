// Puxa o pixelboard
const pixelBoard = document.getElementById('pixel-board');
// Puxa a paleta
const palette = document.getElementsByClassName('color');
const paletteDois = document.getElementById('color-palette');
// Puxa o botão de limpar
const cleanButton = document.getElementById('clear-board');
function createTable(tableSize) {
  // Cria as linhas
  for (let r = 0; r < tableSize; r += 1) {
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    pixelBoard.appendChild(newRow);
    for (let c = 0; c < tableSize; c += 1) {
      const newColumn = document.createElement('div');
      newColumn.classList.add('column');
      newColumn.classList.add('pixel');
      newRow.appendChild(newColumn);
    }
  }
}
createTable(5);
// Puxa botão VQV
const vqv = document.getElementById('generate-board');
// Puxa o input
const size = document.querySelector('#board-size');
// Cria o board de acordo com o input do usuário
function createNewTable() {
  // Apaga o board anterior
  const everyPixel = document.getElementsByClassName('pixel');
  while (everyPixel.length > 0) {
    const father = everyPixel[0].parentNode;
    father.removeChild(everyPixel[0]);
  }
  if (size.value < 5) {
    size.value = 5;
  } else if (size.value > 50) {
    size.value = 50;
  }
  createTable(size.value);
}
// Checa se o input é valido
vqv.addEventListener('click', () => {
  if (size.value.length === 0) {
    window.alert('Board inválido!');
  } else {
    createNewTable();
  }
});

// Preenche a paleta de cores
function fillPalette() {
  palette[0].style.backgroundColor = 'rgb(0, 0, 0)';
  palette[0].classList.add('selected');
  for (let i = 1; i < palette.length; i += 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const randomColor = `rgb(${r},${g},${b})`;
    palette[i].style.backgroundColor = randomColor;
  }
}
fillPalette();
let selectedColor = 'rgb(0, 0, 0)';
// Colore a pixel-board em preto quando carrega página
pixelBoard.addEventListener('click', (event) => {
  const pixelSelected = event.target;
  pixelSelected.style.backgroundColor = selectedColor;
});
// Colore a pixel-board com a cor selecionada da paleta
function colorBoard() {
// Seleciona a cor
  paletteDois.addEventListener('click', (event) => {
    for (let i = 0; i < palette.length; i += 1) {
      palette[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
    selectedColor = event.target.style.backgroundColor;
  });
  // Coloca a cor
  pixelBoard.addEventListener('click', (event) => {
    const pixelSelected = event.target;
    pixelSelected.style.backgroundColor = selectedColor;
  });
}
colorBoard();
// Limpa a tabela
function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');
  cleanButton.addEventListener('click', () => {
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  });
}
clearBoard();
