var randomNumber1 = Math.floor(Math.random()*6) +1 ;
var imageNumber1 = "dice" + randomNumber1 + ".png";
var imageSource = "images/" + imageNumber1;

var image1 = document.querySelector(".img1");
image1.setAttribute("src", imageSource);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var imageSource2 = "images/dice" + randomNumber2 + ".png"

var image2 = document.querySelector(".img2");
image2.setAttribute("src", imageSource2)

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins"
}
else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins"
}
else {
    document.querySelector("h1").textContent = "Draw"
}





