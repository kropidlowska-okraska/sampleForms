// function is connected with selector. we check selector value to display proper img

function init() {

    const form = document.querySelector("form");
    const selector = document.querySelector("select");
    const imgWindows = document.querySelector("[alt='Windows']");
    const imgOSX = document.querySelector("[alt='Ubuntu']");
    const imgApple = document.querySelector("[alt='Apple']");

    form.addEventListener("submit", formSubmit);

    refreshImages(); // we call the function before the form submission to have the proper img on the start

    function formSubmit(event) {
        event.preventDefault(); // the page won't reload
        refreshImages();
    }

    function refreshImages() {
        if (selector.value === "Windows") {
            imgWindows.style.display = "block";
            imgApple.style.display = "none";
            imgOSX.style.display = "none";
        }

        if (selector.value === "Os X") {
            imgWindows.style.display = "none";
            imgApple.style.display = "block";
            imgOSX.style.display = "none";
        }

        if (selector.value === "Ubuntu") {
            imgWindows.style.display = "none";
            imgApple.style.display = "none";
            imgOSX.style.display = "block";
        }
    }
}


document.addEventListener("DOMContentLoaded", init);