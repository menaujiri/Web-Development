var randomNumber1 = Math.floor(Math.random()*6) +1 ;
var imageNumber1 = "dice" + randomNumber1 + ".png";
var imageSource = "images/" + imageNumber1;

var image1 = document.querySelector(".img1");
image1.setAttribute("src", imageSource);





