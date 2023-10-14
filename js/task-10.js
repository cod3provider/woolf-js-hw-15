function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

const createBoxes = amount => {
  amount = input.value;
  let width = 30;
  let height = 30;

  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.backgroundColor = getRandomHexColor();

    boxes.append(div)

    width += 10;
    height += 10;
  }
}

const  destroyBoxes = () => {
  input.value = '';
  boxes.innerHTML = '';
}

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);