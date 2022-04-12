const cores = ['black', 'yellow', 'gray', 'green'];
let tamanhoDaTable = 10;

const botaoTamanho = document.getElementById('generate-board');

botaoTamanho.addEventListener('click', function(){
  tamanhoDaTable = parseInt(document.getElementById('board-size').value);
});

const body = document.body;
const h1Title = document.createElement('h1');
h1Title.setAttribute('id', 'title');
h1Title.innerText = 'Paleta de Cores';
h1Title.style.marginLeft = '20px';
h1Title.style.marginTop = '20px';
body.appendChild(h1Title);

const paletaCor = document.createElement('div');
paletaCor.setAttribute('id', 'color-palette');
body.appendChild(paletaCor);

const colorPallete = document.getElementById('color-palette');

for (let i = 0; i < 4; i += 1) {
  const box = document.createElement('div');
  box.setAttribute('class', 'color');
  box.style.backgroundColor = cores[i];
  colorPallete.appendChild(box);
  if (box.style.backgroundColor === 'black') {
    box.classList.add('selected');
  }

  box.addEventListener('click', function () {
    let children = colorPallete.getElementsByClassName('color');
    for (i = 0; i < children.length; i += 1) {
      children[i].setAttribute('class', 'color');
    }
    box.setAttribute('class', 'selected color');
  });
}

let botao = document.createElement('button');
botao.innerText = 'Limpar';
botao.setAttribute('id', 'clear-board');
body.appendChild(botao);

const pixelBoard = document.createElement('div');
pixelBoard.setAttribute('id', 'pixel-board');
body.appendChild(pixelBoard);

botao.addEventListener('click', function () {
    for (i = 0; i < (tamanhoDaTable*tamanhoDaTable); i += 1) {
        let setBranco = document.getElementsByClassName('pixel')[i];
        setBranco.style.backgroundColor = 'white';
    }
});


const getPixel = document.getElementById('pixel-board');

for (let i = 0; i < tamanhoDaTable; i += 1) {
    const divLinha = document.createElement('div');
    divLinha.setAttribute('class', 'linha');
    getPixel.appendChild(divLinha);

    for (let j = 0; j < tamanhoDaTable; j += 1) {
        const getLinha = document.getElementsByClassName('linha')[i];
        const colunas = document.createElement('div');
        colunas.setAttribute('class', 'pixel');
        getLinha.appendChild(colunas);

        colunas.addEventListener('click', function () {
            let corEscolhida = document.getElementsByClassName('selected')[0];
            colunas.style.backgroundColor = corEscolhida.style.backgroundColor;
        });
    }
}