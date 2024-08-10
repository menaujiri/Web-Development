var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = []

$(".btn" ).click(function() {
    var userChosenColour = $(this).attr("id")
    userClickedPattern.push(userChosenColour)
    playSound(userChosenColour)
    
  } );


function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenNumber = buttonColours[randomNumber];
    gamePattern.push(randomChosenNumber);
    $("#" + randomChosenNumber).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour)
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

