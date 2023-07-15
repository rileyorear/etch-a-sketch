const container = document.querySelector('.container');
const body = document.querySelector('body');
const sizeButton = document.querySelector('#sizeButton');
const resetButton = document.querySelector('#resetButton');
const eraserButton = document.querySelector('#eraserButton');

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
      else box.style.backgroundColor = 'black';
    })
    box.addEventListener('mouseover', () => {
      if (eraser === true) {
        if (mouseDown === true) { box.style.backgroundColor = 'white'; }
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
  size = +prompt('Enter a number 128 or lower to set the width and height of the grid:', );
  if (size <= 128 && size > 0) {
  removeGrid();
  createGrid();
  }
  else return;
});

resetButton.addEventListener('mouseup', (reset));