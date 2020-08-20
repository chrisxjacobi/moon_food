// validate function to ensure valid data is sent, and displays an alert depending on data validity
function validate() {
    if (document.forms.app.valid === false) {
        alert("Error: Please try again");
        return false;
    } else {
        alert("Thanks; we'll be in touch!")
    }
}