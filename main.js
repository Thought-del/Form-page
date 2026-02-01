const form = document.getElementsByTagName("form")[0];

const email = document.getElementById("email");
const spanError = document.querySelector("span");

const button = document.querySelector("button");

/* button.addEventListener('button', function(e) {
    e.preventDefault();

}); */

email.addEventListener('input', function(e) {
    if (this.validity.valid) {
        hideError();
    } else {
        if (this.value.trim() !== '') {
            showError();
        } else {
            hideError();
        }
    }
});

email.addEventListener('blur', function() {
    if (this.value.trim() !== '' && !this.validity.valid) {
        showError();
    }
});

form.addEventListener("submit", function (e) {
    if (!email.validity.valid) {
        showError();
        e.preventDefault();
        email.focus();
    }
});

function showError() {
    let errorMessage = ""

    if (email.validity.valueMissing) {
        errorMessage = 'Email is required';
    } else if (email.validity.typeMismatch) {
        errorMessage = 'Valid email required';
    } else {
        errorMessage = 'Please enter a valid email address';
    }


    spanError.classList.add('error');
    email.classList.add('input_error');
}

function hideError() {
    spanError.textContent = "";
    spanError.classList.remove('error');
    email.classList.remove('input_error');
}