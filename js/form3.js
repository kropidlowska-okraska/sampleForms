function init() {

    const team1 = document.getElementById("team1");
    const team2 = document.getElementById("team2");
    const points1 = document.getElementById("points1");
    const points2 = document.getElementById("points2");


    const form = document.querySelector("form");

    form.addEventListener("submit", validateForm);

    function validateForm(event) {

        let formIsValid = true;

        event.preventDefault();

        if (team1.value === team2.value) {
            formIsValid = false;
        }

        if (points1.value < 0 || points2.value < 0 || points1.value === undefined || points2.value === undefined) {
            formIsValid = false;
        }

        if (formIsValid === false) {
            alert("You need to type correct data.")
        }

        else { // if the form is valid this will happen

            let newTR = document.createElement("tr");

            let tbody = document.querySelector("tbody");

            let newRow = tbody.appendChild(newTR);

            let newtd1 = document.createElement("td");

            newRow.appendChild(newtd1);

            newtd1.innerText = team1.value;

            let newtd2 = document.createElement("td");

            newRow.appendChild(newtd2);

            newtd2.innerText = team2.value;

            let newtd3 = document.createElement("td");

            newRow.appendChild(newtd3);

            newtd3.innerText = points1.value + " - " + points2.value;
        }
    }
}


document.addEventListener("DOMContentLoaded", init);