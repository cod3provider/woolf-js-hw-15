function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

const handleClick = () => {
  const getColor = getRandomHexColor();

  document.body.style.backgroundColor = getColor;
  spanColor.textContent = getColor;
}

btnChangeColor.addEventListener('click', handleClick);