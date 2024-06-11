const validEmails = [
    "gmail",
    "yahoo",
    "outlook",
    "hotmail",
];

function validateForm(event) {
    event.preventDefault();

    let errorElement = document.getElementById('errorForm');

    let nameInput = document.getElementById('name');
    if (nameInput.value.trim() === '') {
        errorElement.textContent = 'Por favor, introduce tu nombre.';
        setTimeout(function() {
            errorElement.textContent = '';
        }, 3000);
        return;
    } else if(nameInput.value.length > 30) {
        errorElement.textContent = 'Por favor, introduce tu nombre de menos de 30 caracteres.';
        setTimeout(function() {
            errorElement.textContent = '';
        }, 3000);
        return;
    }

    let emailInput = document.getElementById('email');
    if (!emailInput.value.includes('@')) {
        errorElement.textContent = 'Por favor, introduce un correo electrónico válido.';
        setTimeout(function() {
            errorElement.textContent = '';
        }, 3000);
        return;
    } else if(!validateEmailDom(emailInput.value)){
        errorElement.textContent = 'Por favor, introduce un dominio de correo electrónico válido';
        setTimeout(function() {
            errorElement.textContent = '';
        }, 3000);
        return;
    }

    let messageInput = document.getElementById('message');
    if (messageInput.value.trim() === '') {
        errorElement.textContent = 'Por favor, escribe tu mensaje.';
        setTimeout(function() {
            errorElement.textContent = '';
        }, 3000);
        return;
    } else if(messageInput.value.length > 1000) {
        errorElement.textContent = 'El mensaje no debe tener más de 1000 caracteres, incluyendo espacios.';
        setTimeout(function() {
            errorElement.textContent = '';
        }, 3000);
        return;
    }


    errorElement.textContent = 'Mensaje enviado';
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
    setTimeout(function() {
        errorElement.textContent = '';
    }, 3000);
}

function validateEmailDom(email) {
    for(let i = 0; i < validEmails.length; i++) {
        if(email.includes(validEmails[i])) {
            return true;
        }
    }
    return false;
}
