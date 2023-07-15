const container = document.querySelector('.container');
const body = document.querySelector('body');

let size = 64;
function updateBoxSize (size) {
  width = 500/size;
  return width;
}

let mouseDown = false;
body.addEventListener('mousedown', () => {
  mouseDown = true;
  console.log(mouseDown);
});
body.addEventListener('mouseup', () => {
  mouseDown = false;
  console.log(mouseDown);
});

for (i = 0; i < size * size; i++) {
  const box = document.createElement('div');
  box.classList.add('grid-box')
  box.style.width = `${updateBoxSize(size)}px`;
  box.style.height = `${updateBoxSize(size)}px`;
  container.appendChild(box);
  
  box.addEventListener('mousedown', () => {
    box.style.backgroundColor = 'black';
  })
  box.addEventListener('mouseover', () => {
    if (mouseDown === true) {
      box.style.backgroundColor = 'black';
    }
  });
}

