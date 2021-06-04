const listaDeCor = 'lista-de-cor';
const pixelBoard = '#pixel-board';
const input = document.querySelector('input');
let paletaDeCor = 'color-palette';
ListaHasDeCor = '#lista-de-cor'

function criaUlDeCor(id) {
  const ul = document.createElement('ul');
  const nav = document.getElementById(id);
  nav.appendChild(ul);
  ul.id = listaDeCor;
}

criaUlDeCor(paletaDeCor);

function criaLiCores(id, n) {
  const ul = document.getElementById(id);
  for (let index = 1; index <= n; index += 1) {
    const li = document.createElement('li');
    ul.appendChild(li);
    if (document.getElementsByClassName('selected')[0] === undefined) {
      li.className = 'color';
      li.classList.add('selected');
    } else {
      li.className = 'color';
    }
  }
}

function NumeroValidoInput() {
  let Inputvalor = document.querySelector('#board-size').value;
  if (Inputvalor < 5 && Inputvalor > -1) {
    Inputvalor = 5;
    return Inputvalor;
  } else if (Inputvalor > 50){
    Inputvalor = 50;
    return Inputvalor;
  } else if (Inputvalor >= 5 && Inputvalor <= 50 ) {
    return Inputvalor;
  } else {
    return alert('Board inválido!');
  }
};

function mudaCorDoPixel() {
  let pixelNumeroN = 0;
  const quantidade = NumeroValidoInput();
  for (let i = 0; i < quantidade; i += 1) {
    const elementoDaTabelaPixelada = document.getElementById(`pixel ${pixelNumeroN}`);
    elementoDaTabelaPixelada.addEventListener('click', mudaCor);
    pixelNumeroN += 1;
  }
}

criaLiCores(listaDeCor, 4);

function AdicionaPixels() {
  const quant = NumeroValidoInput();;
  const criarBoard = document.createElement('section');
  document.body.appendChild(criarBoard);
  criarBoard.setAttribute('id', 'pixel-board');
  let pixelNumeroN = 0; for (let linha = 1; linha <= quant; linha += 1) {
    const line = document.createElement('ul');
    criarBoard.appendChild(line);
    for (let coluna = 1; coluna <= quant; coluna += 1) {
      const column = document.createElement('li');
      line.appendChild(column);
      column.className = 'pixel';
      column.id = `pixel ${pixelNumeroN}`; column.style.backgroundColor = 'white';
      column.addEventListener('click', mudaCor)
      pixelNumeroN += 1;
    }
  }
  mudaCorDoPixel();
};

AdicionaPixels();

function removePixels() {
  const tabelaDePixel = document.querySelector(pixelBoard);
  tabelaDePixel.parentNode.removeChild(tabelaDePixel);
}

document.getElementById('generate-board').addEventListener('click', () => {
  removePixels();
  AdicionaPixels();
});

function changeColor(event) {
  const NovaCor = event.target;
  const CorAntiga = document.getElementsByClassName('selected');
  CorAntiga[0].classList.remove('selected');
  NovaCor.classList.add('selected');
}
const classSelecionada = document.querySelector(ListaHasDeCor);
classSelecionada.addEventListener('click', changeColor);

function mudaCor(event) {
  const pixelClicado = event.target;
  const corBase = document.getElementsByClassName('selected');
  pixelClicado.style.backgroundColor = corBase[0].style.backgroundColor;
  pixelClicado.setAttribute('id', 'colorido');
}

mudaCorDoPixel();

document.querySelector('#clear-board').addEventListener('click', () => {
  let pixelsColoridos = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelsColoridos.length; i += 1) {
    pixelsColoridos[i].style.backgroundColor = 'white';
    pixelsColoridos[i].setAttribute('id', '');
  }
});

function removeCores() {
  const nav = document.getElementsByTagName('nav')[0];
  const ul = document.getElementsByTagName('ul')[0];
  nav.removeChild(ul);
}

function gerarCor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  const cor = `rgb(${r}, ${g}, ${b})`;
  return cor;
}

document.querySelector('#mudarCores').addEventListener('click', CriandoCoresAleatórias);

function CriandoCoresAleatórias() {
  removeCores();
  criaUlDeCor(paletaDeCor);
  criaLiCores(listaDeCor, 4);  
  let lista = document.getElementById('lista-de-cor');
  for (let i = 0; i < lista.children.length; i += 1) {
    if (i === 0 ) {
      lista.children[i].style.backgroundColor = 'black'
    } else {
    const cor = gerarCor();
    lista.children[i].style.backgroundColor = cor;
    }
  }
  let classSelecionada = document.querySelector(ListaHasDeCor);
  classSelecionada.addEventListener('click', changeColor);
}

CriandoCoresAleatórias();

NumeroValidoInput();

function gerarCorVerde() {
  let r = Math.random() * 100;
  let g = Math.random() * 255;
  let b = Math.random() * 0;
  let cor = `rgb(${r}, ${g}, ${b})`;
  return cor;
};

function gerarCorVermelha() {
  let r = Math.random() * 255;
  let g = Math.random() * 100;
  let b = Math.random() * 100;
  let cor = `rgb(${r}, ${g}, ${b})`;
  return cor;
};

function gerarCorAzul() {
  let r = Math.random() * 100;
  let g = Math.random() * 100;
  let b = Math.random() * 255;
  let cor = `rgb(${r}, ${g}, ${b})`;
  return cor;
};

function CriandoCoresAleatóriasVerde() {
  removeCores();
  criaUlDeCor(paletaDeCor);
  criaLiCores(listaDeCor, 4);  
  let lista = document.getElementById('lista-de-cor');
  for (let i = 0; i < lista.children.length; i += 1) {
    if (i === 0 ) {
      lista.children[i].style.backgroundColor = 'black'
    } else {
      const cor = gerarCorVerde();
      lista.children[i].style.backgroundColor = cor;
    }
  }
  let classSelecionada = document.querySelector(ListaHasDeCor);
  classSelecionada.addEventListener('click', changeColor);
};

function CriandoCoresAleatóriasRed() {
  removeCores();
  criaUlDeCor(paletaDeCor);
  criaLiCores(listaDeCor, 4);  
  let lista = document.getElementById('lista-de-cor');
  for (let i = 0; i < lista.children.length; i += 1) {
    if (i === 0 ) {
      lista.children[i].style.backgroundColor = 'black'
    } else {
      const cor = gerarCorVermelha();
      lista.children[i].style.backgroundColor = cor;
    }
  }
  let classSelecionada = document.querySelector(ListaHasDeCor);
  classSelecionada.addEventListener('click', changeColor);
};

function CriandoCoresAleatóriasAzul() {
  removeCores();
  criaUlDeCor(paletaDeCor);
  criaLiCores(listaDeCor, 4);  
  let lista = document.getElementById('lista-de-cor');
  for (let i = 0; i < lista.children.length; i += 1) {
    if (i === 0 ) {
      lista.children[i].style.backgroundColor = 'black'
    } else {
      const cor = gerarCorAzul();
      lista.children[i].style.backgroundColor = cor;
    }
  }
  let classSelecionada = document.querySelector(ListaHasDeCor);
  classSelecionada.addEventListener('click', changeColor);
};

document.querySelector('#mudarCoresVerde').addEventListener('click', CriandoCoresAleatóriasVerde);


document.querySelector('#mudarCoresAzul').addEventListener('click', CriandoCoresAleatóriasAzul);


document.querySelector('#mudarCoresVermelha').addEventListener('click', CriandoCoresAleatóriasRed);
