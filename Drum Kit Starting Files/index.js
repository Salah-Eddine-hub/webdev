// function playSound(){
//     var audio = new Audio('./sounds/tom-1.mp3');
//     audio.play()
// }

// function HouseKeeper (yearOfExp, name, cleaningItem){
//     this.yearOfExp = yearOfExp;
//     this.name = name;
//     this.cleaningItem = cleaningItem;
//     this.status = function (){
//         console.log("the cleaning in progress...!");
//     }
// }

// var hKeeper1 = new HouseKeeper(10, "issam", ["bath", "kitchen", "rooms"]);

document.addEventListener("keydown", function (){
    playSound(event.key);
});

for (var i = 0; i <  document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",  function (){
        playSound(this.innerHTML);
        animepress(this.innerHTML);

    });
    };

function playSound(event){
    switch(event){
        case "w":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;

        case "a":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case "s":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case "d":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        
        case "j":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        
        case "k":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
        
        case "l":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        default:
            console.log(innerBtn);
    }
}


function animepress(buttonPress){
    var buutonActive = document.querySelector("." + buttonPress) ;
    buutonActive.classList.add("pressed");

  setTimeout(function() {
    buutonActive.classList.remove("pressed");
  }, 100);

}


// document.querySelectorAll(".drum").forEach(element => {
//     element.addEventListener("click", playSound);
// });

// function add(num1, num2) {
//     return num1 + num2;
//     }
     
//     function subtract(num1, num2) {
//     return num1 - num2;
//     }
     
//     function multiply(num1, num2) {
//     return num1 * num2;
//     }
     
//     function divide(num1, num2) {
//     return num1 / num2;
//     }
     
//     function calculator(num1, num2, operator) {
//     return operator(num1, num2);
//     }

//     console.log(calculator(3, 3, multiply));