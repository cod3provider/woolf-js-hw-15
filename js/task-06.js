const input = document.querySelector('#validation-input');

const handleCheckInput = e => {
    const inputNeedLength = Number(e.currentTarget.dataset.length);
    const inputCurrentLength = e.currentTarget.value.length;
    if (inputCurrentLength === inputNeedLength) {
        input.classList.add('valid');
        if (input.classList.contains('invalid')) {
            input.classList.remove('invalid');
        }
    } else {
        input.classList.add('invalid');
    }
}

input.addEventListener('blur', handleCheckInput);