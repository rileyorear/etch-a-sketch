const container = document.querySelector('.container');

let size = 24;
function updateBoxSize (size) {
  width = 500/size;
  return width;
}

for (i = 0; i < size * size; i++) {
  const box = document.createElement('div');
  box.classList.add('grid-box')
  box.style.width = `${updateBoxSize(size)}px`;
  box.style.height = `${updateBoxSize(size)}px`;
  container.appendChild(box);
}

  
