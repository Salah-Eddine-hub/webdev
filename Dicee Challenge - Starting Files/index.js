console.log("tha wa good");
var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomNumber0 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").src = "./images/dice"+ randomNumber+".png";
document.querySelector(".img2").src = "./images/dice"+ randomNumber0+".png";
if (randomNumber > randomNumber0){
    document.querySelector("h1").innerHTML = "player 1 win the match";
}
else if (randomNumber < randomNumber0)
    document.querySelector("h1").innerHTML = "player 2 win the match";
else
    document.querySelector("h1").innerHTML = "draw";

