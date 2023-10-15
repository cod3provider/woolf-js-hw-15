const input = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

spanText.style.fontSize = `${input.value}px`;
const handleChange = e => {
    spanText.style.fontSize = `${e.currentTarget.value}px`;
}

input.addEventListener('input', handleChange);