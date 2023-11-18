var gamePatern = [];

var usrClickPatern = [];

var buttonColor = ["blue", "yellow", "green", "red"];
$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
    usrClickPatern.push(userChosenColour);
});

$("#" + randomChosenColor).on("click", function (){

});
function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);
    var randomChosenColor = buttonColor[randomNumber];
    console.log(randomChosenColor);
    gamePatern.push(randomChosenColor);
    console.log(gamePatern);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);;
    var sound = new Audio("./sounds/" + randomChosenColor + ".mp3");
    sound.play();
}

