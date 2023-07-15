const container = document.querySelector('.container');
const body = document.querySelector('body');
const sizeButton = document.querySelector('.sizeButton')

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

function createGrid () {
  for (i = 0; i < size * size; i++) {
    const box = document.createElement('div');
    box.classList.add('gridBox')
    box.style.width = `${updateBoxSize(size)}px`;
    box.style.height = `${updateBoxSize(size)}px`;
    box.style.backgroundColor = 'white';
    container.appendChild(box);
    
    box.addEventListener('mousedown', () => {
      box.style.backgroundColor = 'black';
    })
    box.addEventListener('mouseover', () => {
      if (mouseDown === true) { box.style.backgroundColor = 'black'; }
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

sizeButton.addEventListener('mouseup', () => {
  size = +prompt('Enter a number to set the width and height of the grid:', );
  removeGrid();
  createGrid();  
});

