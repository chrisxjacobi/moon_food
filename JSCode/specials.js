"use strict";


/* writing the specials to specials.html div with id "specials" */
document.getElementById("specials").innerHTML = show_specials();

/* function to show the specials built as a table with HTML elements */
function show_specials() {

    var specials_HTML = "<table id='specials-table'>";
    specials_HTML += "<tr>" + "<th>Item</th>" + "<th>Price</th>" + "<th>Picture</th>" + "</tr>";
    specials_HTML += create_specials();
    specials_HTML += "</table>";

    return specials_HTML;
}

/* function that creates the specials menu */
function create_specials() {

    var items = ["Whiskey Aurora", "Falling Star Flight", "Light-Year Lemon Drop", "Dark Matter Derby", "Martian Mojito"];
    var prices = [10.95, 13.95, 8.95, 8.95, 9.95];
    var specials_pics = ["specials_pic_1.jpeg", "specials_pic_2.jpeg", "specials_pic_3.jpeg", "specials_pic_4.jpeg", "specials_pic_5.jpeg"];
    
/* for loop to add table data for special item name, price, and image */
    var HTML_code = "<tr>";
    for (var i = 0; i <= 4; i++) {
        HTML_code +=
            "<td class='item-name'>" + items[i] + "</td>" +
            "<td class='item-price'>" + "$" + prices[i] + "</td>" +
            "<td class='item-pic'>" + "<img src= images/" + specials_pics[i] + ">" +
            "</td>" + "</tr>";
    }

    return HTML_code;
}

/* creating a button to close the specials page */
var button = document.getElementById("button");
button.innerHTML = "Close Specials";

/* closing the specials window on a button click */
button.addEventListener("click",
    function () {
        window.close();
    })
