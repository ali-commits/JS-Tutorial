function isValidUsername(username) {
    const usernamePattern = /.*/;
    return usernamePattern.test(username);
}

function isValidEmail(email) {
    const emailPattern = /.*/;
    return emailPattern.test(email);
}

function isValidPhone(phone) {
    const phonePattern = /.*/;
    return phonePattern.test(phone);
}

function isValidPassword(password) {
    const passwordPattern = /.*/;
    return passwordPattern.test(password);
}

function validateInput(inputElement, validationFunction) {
    if (validationFunction(inputElement.value)) {
        inputElement.classList.add('valid');
        inputElement.classList.remove('invalid');
    } else {
        inputElement.classList.add('invalid');
        inputElement.classList.remove('valid');
    }
}

document.getElementById('username').addEventListener('input', function() {
    validateInput(this, isValidUsername);
});

document.getElementById('email').addEventListener('input', function() {
    validateInput(this, isValidEmail);
});

document.getElementById('phone').addEventListener('input', function() {
    validateInput(this, isValidPhone);
});

document.getElementById('password').addEventListener('input', function() {
    validateInput(this, isValidPassword);
});
