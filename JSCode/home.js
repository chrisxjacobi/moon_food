"use strict";

/* selecting banner to change the background image */
var banner = document.getElementById("banner");

/* setIntervals to cycle through each background image at a rate of every 3 seconds */
setInterval(
    function() {
    banner.style.backgroundImage = "url('images/banner_pic_2.jpeg')";
}, 3000);

setInterval(
    function() {
    banner.style.backgroundImage = "url('images/banner_pic_3.jpeg')";
}, 6000);

setInterval(
    function() {
    banner.style.backgroundImage = "url('images/banner_pic_4.jpeg')";
}, 9000);

setInterval(
    function() {
    banner.style.backgroundImage = "url('images/banner_pic_1.jpeg')";
}, 12000);





/*

var myVar = setInterval(setColor, 300);
 
function setColor() {
  var x = document.body;
  x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
}

var my_swap = setInterval(swap_image, 500);


function swap_image() {
    
    var banner = document.getElementById("banner");
    banner.style.backgroundImage = banner.style.backgroundImage == "url('images/banner_pic_1.jpeg')" ? "url('images/banner_pic_2.jpeg')" : "url('images/banner_pic_1.jpeg')"
}

setInterval(fn_1, 3000);
clearInterval();
setInterval(fn_2, 3000);
clearInterval();


function fn_1() {
    banner.style.backgroundImage = "url('images/banner_pic_2.jpeg')";
}

function fn_2() {
    banner.style.backgroundImage = "url('images/banner_pic_3.jpeg')";
}

function fn_3() {
    banner.style.backgroundImage = "url('images/banner_pic_4.jpeg')";
}


window.addEventListener("load", swap_image())


function swap_image() {
    var banner = document.getElementById("banner");
    banner.style.backgroundImage = "url('images/banner_pic_4.jpeg')";
}


function swap_image() {

    var banner_pics = ["banner_pic_1.jpeg", "banner_pic_2.jpeg", "banner_pic_3.jpeg", "banner_pic_4.jpeg"];

    for (var i = 0; i <= 3; i++) {

        var img = document.createElement("img");
        img.setAttribute("src", "images/" + banner_pics[i]);
        document.getElementById("banner").appendChild(img);
    }
}

setInterval(show_image, 3000);

setInterval(function () {

    var banner = document.getElementById("banner");
    var banner_pics = ["banner_pic_1", "banner_pic_2", "banner_pic_3", "banner_pic_4"];
    var index = 0
    banner.style.backgroundImage = banner_pics[index];
    index++;

}, 3000);

setInterval(swap_image, 3000);
*/
