function init() {

    const email = document.getElementById("email");
    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const pass1 = document.getElementById("pass1");
    const pass2 = document.getElementById("pass2");
    const agree = document.getElementById("agree");

    const form = document.querySelector("form");
    form.addEventListener("submit", validateForm);

    const errorMessage = form.querySelector(".error-message");
    const successMessage = form.querySelector(".success-message");

    function validateForm(event) {
        let formIsValid = true;  // I start with this and with the last line setting preventDefault in case formIsValid != true;
        errorMessage.innerText = "";

        if (email.value.indexOf("@") === -1) {
            errorMessage.innerText += "Email must contain @ sign\n";
            formIsValid = false;
        }

        if (name.value.length < 2) {
            errorMessage.innerText += "Your name is too short, looser\n";
            formIsValid = false;
        }

        if (surname.value.length < 2) {
            errorMessage.innerText += "Your surname is too short.\n";
            formIsValid = false;
        }

        if (pass1.value !== pass2.value || pass1.value === "") {
            // value returns string
            errorMessage.innerText += "Passords are not the same or you have not given any.\n";
            formIsValid = false;
        }

        if (agree.checked === false) {
            errorMessage.innerText += "You need to accept the condtions\n";
            formIsValid = false;
        }

        if (formIsValid === false) {
            event.preventDefault();
        }
        else {
            successMessage.innerText = "The form was properly filled";
        }
    }
}

document.addEventListener("DOMContentLoaded", init);