var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenNumber = buttonColours[randomNumber];
    gamePattern.push(randomChosenNumber);
    $("#" + randomChosenNumber).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio('audio_file.mp3');
    audio.play();


}

nextSequence();