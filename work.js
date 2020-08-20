// function to reload page data on click of reset button so user may attempt another application
var reset = document.getElementById("reset-button");
reset.onclick = window.reload();


// validate function to ensure valid data is sent, and displays an alert depending on data validity
function validate() {
    if (document.forms.app.valid === false) {
        alert("Error: Please try again");
    } else {
        alert("Thanks; we'll be in touch!")
    }
}