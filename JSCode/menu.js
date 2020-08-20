"use strict";


/* writing the menu to menu.html div with id "menu" */
document.getElementById("menu").innerHTML = show_menu();


/* function to show the menu built as a table with HTML elements */
function show_menu() {

    var menu_HTML = "<table id='menu-table'>";
    menu_HTML += "<tr>" + "<th>Item</th>" + "<th>Price</th>" + "<th>Picture</th>" + "</tr>";
    menu_HTML += create_menu();
    menu_HTML += "</table>";

    return menu_HTML;
    
}

/* function that creates the menu */
function create_menu() {

/* arrays that store the menu choices, their prices, and associated pictures */
var items = ["Space Spaghetti", "Big Bang Burger", "Pulsar Pizza", "Futuristic Fries", "Neptune Nachos", "White Dwarf Wings", "Oort-Cloud Onion Rings", "Quasar-dillas"];
var prices = [13.95, 12.95, 10.95, 6.95, 8.95, 11.95, 8.95, 11.95];
var food_pics = ["menu_pic_1.jpeg", "menu_pic_2.jpeg", "menu_pic_3.jpeg", "menu_pic_4.jpeg", "menu_pic_5.jpeg", "menu_pic_6.jpeg", "menu_pic_7.jpeg", "menu_pic_8.jpeg"];


/* creating a table row, then a for loop to will go through each array, create a table data element for each item, and end the row. this will make 8 seperate rows that each have the name of a menu item, its price, and a picture  */
    
    var HTML_code = "<tr>";
    for (var i = 0; i <= 7; i++) {
        HTML_code +=
        "<td class='item-name'>" + items[i] + "</td>" +
        "<td class='item-price'>" + "$" + prices[i] + "</td>" +
        "<td class='item-pic'>" + "<img src= images/" + food_pics[i] + ">"
        + "</td>" + "</tr>";
    }

    return HTML_code;
}
