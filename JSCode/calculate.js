"use strict";

/* button that runs the calculate function on a click */
var btn = document.getElementById("calc-button");
btn.onclick = calculate;


/* calculate function that loops through the menu ordering system, caclulating a total represented by the quantity of each menu item, that item's specific price, and the tax assesed for all items */
function calculate() {

    // defining variables to be later used in the loop
    var itemFood;
    var itemPrice;
    var itemQty;
    
    // gathering all menu table rows from the index.html form table
    // total variable to serve as an accumulator
    // the tax assessed for the order
    // error flag that will catch form submission errors
    var rows = document.getElementsByClassName("row");
    var total = 0;
    var tax = 1.0825;
    var error = false;

    /* looping through form table to grab table data for the row, item price, and quantity */
    for (var i = 0; i < rows.length; i++) {
        itemFood = document.getElementById("food" + i).textContent;
        itemPrice = document.getElementById("price" + i).textContent;
        itemQty = document.getElementById("menu" + i).value;
        itemPrice = (itemPrice * itemQty);

        /* alert that catches non-numerical form data and reloads the page for another opportunity for a visitor to submit an order. if successful, an order is added to our total accumulator */
        
        if (isNaN(itemQty)) {
            alert("You must enter a numeric value to order " + itemFood + ". Please try again.");
            error = true;
            window.location.reload();

        } else {
            itemPrice = parseFloat(itemPrice);
        }

        if (!error) {
            total += itemPrice
        }
    }

    /* if order is successful, the total and assessed tax is shown to the visitor as an alert and the page is reloaded for another potential order  */
    if (!error) {
        window.alert("Your order total is: $" + (total * tax).toFixed(2) + ". Ready for pickup in 10-15 light years.");
        location.reload();
    }
};







/* complete code logic, needing comments and slight cleanup */

// "use strict";

// button that runs the calculate function on a click
/*
var btn = document.getElementById("calc-button");
var menuTable = document.getElementById("menuTable");
btn.onclick = calculate;

function calculate() {

    var itemFood;
    var itemPrice;
    var itemQty;
    var rows = document.getElementsByClassName("row");
    var total = 0;
    var tax = 1.0825;
    var error = false;

    for (var i = 0; i < rows.length; i++) {
        itemFood = document.getElementById("food" + i).textContent;
        itemPrice = document.getElementById("price" + i).textContent;
        itemQty = document.getElementById("menu" + i).value;
        itemPrice = (itemPrice * itemQty);

        if (isNaN(itemQty)) {
            alert("You must enter a numeric value for your order. Please try again");
            error = true;
            window.location.reload();

        } else {
            itemPrice = parseFloat(itemPrice);
        }

        if (!error) {
            total += itemPrice
        }
    }

    if (!error) {
        window.alert("Your order total is: $" + (total * tax).toFixed(2) + ". Press 'OK' to proceed to payment.");
        location.reload();
    }
}; 

*/



/* code that currently logs every single item and their total prices due to quantity ordered, prices are formatted correctly */

/*

"use strict";

var btn = document.getElementById("calc-button");
var menuTable = document.getElementById("menuTable");
btn.onclick = calculate;

function calculate() {

    var menuForm = document.forms.menuTable;
    var rows = document.getElementsByClassName("row");
    var itemFood;
    var itemPrice;
    var itemQty;

    for (var i = 0; i < rows.length; i++) {
        itemFood = document.getElementById("food" + i).textContent;
        itemPrice = document.getElementById("price" + i).textContent;
        itemPrice = parseFloat(itemPrice);
        itemQty = document.getElementById("menu" + i).value;
        itemPrice = (itemPrice * itemQty).toFixed(2);

        if (!isNaN(itemPrice)) {
            console.log(itemFood + ": $" + itemPrice);
        }

    }
};

*/




/* //    var foods = document.getElementsByClassName("food");
//    var prices = document.getElementsByClassName("price");
var qtys = document.getElementsByClassName("qty");
    
    var rows = document.getElementsByClassName("row");
    var menuForm = document.forms.menuTable;
    var itemFood;
    var itemPrice;
    var itemQty; */


/* for (var i = 0; i < rows.length; i++) {
    itemFood = document.getElementById("food" + i).textContent;
    itemPrice = document.getElementById("price" + i).textContent;
    itemPrice = parseFloat(itemPrice);
    itemQty = document.getElementsByClassName("qty" + i).value;
    itemQty = parseInt(itemQty);
    
    console.log("Your total is: " + itemPrice * itemQty);
} */

//  function calcExp() {
//    var expTable = document.querySelectorAll("#travelExp tr");
//
//    for (var i = 0; i < expTable.length; i++) {
//
//        // document.getElementById("subtotal" + i).value = formatNumber(calcClass(date[i]));
//        // document.forms.expForm.elements.subtotal[i].value = formatNumber(calcClass(date[i]));
//
//        document.getElementById("subtotal" + i).value = formatNumber(calcClass(date[i]));


//function calcClass(sumClass) {
//    var sumFields = document.querySelectorAll("." + sumClass);
//    var sumTotal = 0;
//
//    for (var i = 0; i < sumFields.length; i++) {
//        itemValue = parseFloat(sumFields[i].value);
//
//        if (!isNan(itemValue)) {
//            sumTotal += itemValue;
//        }
//    }
//
//    return sumTotal;
//};
