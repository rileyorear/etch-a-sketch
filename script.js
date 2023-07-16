const container = document.querySelector('.container');
const body = document.querySelector('body');
const sizeButton = document.querySelector('#sizeButton');
const resetButton = document.querySelector('#resetButton');
const eraserButton = document.querySelector('#eraserButton');
const rainbowButton = document.querySelector('#rainbowButton');
const shadingButton = document.querySelector('shadingButton');

let mouseDown = false;
body.addEventListener('mousedown', () => {
  mouseDown = true;
});
body.addEventListener('mouseup', () => {
  mouseDown = false;
});

let size = 64;
function updateBoxSize (size) {
  width = 500/size;
  return width;
}

let eraser = false;
eraserButton.addEventListener('mouseup', () => {
  if (eraser === false) {
    eraser = true;
    eraserButton.textContent = 'ERASER: ON';
  } 
  else {
    eraser = false;
    eraserButton.textContent = 'ERASER: OFF';
  }
});

let rainbow = false;
rainbowButton.addEventListener('mouseup', () => {
  if (rainbow === false) {
    rainbow = true;
    rainbowButton.textContent = 'RAINBOW: ON';
  } 
  else {
    rainbow = false;
    rainbowButton.textContent = 'RAINBOW: OFF';
  }
});

let red;
let green;
let blue;
function redRandom () {
  red = (Math.floor(Math.random() * 256));
  return red;
}

function greenRandom () {
  green = (Math.floor(Math.random() * 256));
  return green;
}

function blueRandom () {
  blue = (Math.floor(Math.random() * 256));
  return blue;
}

function createGrid () {
  for (i = 0; i < size * size; i++) {
    const box = document.createElement('div');
    box.classList.add('gridBox')
    box.style.width = `${updateBoxSize(size)}px`;
    box.style.height = `${updateBoxSize(size)}px`;
    box.style.backgroundColor = 'white';
    container.appendChild(box);
    
    box.addEventListener('mousedown', () => {
      if (eraser === true) box.style.backgroundColor = 'white';
      else if (rainbow === true) {
        box.style.backgroundColor = `rgb(${redRandom()}, ${greenRandom()}, ${blueRandom()})`;
      }
      else box.style.backgroundColor = 'black';
    })
    box.addEventListener('mouseover', () => {
      if (eraser === true) {
        if (mouseDown === true) { box.style.backgroundColor = 'white'; }
      }
      else if (rainbow === true) {
        if (mouseDown === true) {
          box.style.backgroundColor = `rgb(${redRandom()}, ${greenRandom()}, ${blueRandom()})`;
        }
      }
      else {
        if (mouseDown === true) { box.style.backgroundColor = 'black'; }
      }
    });
  }
}
createGrid();

function removeGrid () {
  const boxes = document.querySelectorAll('.gridBox');
  for (box of boxes) {
    box.remove();
  }
}

function reset () {
  const boxes = document.querySelectorAll('.gridBox');
  for (box of boxes) {
    box.style.backgroundColor = 'white';
  }
}

sizeButton.addEventListener('mouseup', () => {
  size = +prompt('Enter a number higher than 0 and lower than 129 to set the dimensions of the grid:', );
  if (size <= 128 && size > 0) {
  removeGrid();
  createGrid();
  }
  else return;
});

resetButton.addEventListener('mouseup', (reset));

