const form = document.querySelector('.login-form');

const handleSubmit = e => {
    e.preventDefault();

    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;

    if (email === '' || password === '') {
        return alert('You must fill in all fields');
    }

    const dataForm = {
        email,
        password,
    }

    console.log(dataForm)
    form.reset();
}

form.addEventListener('submit', handleSubmit);