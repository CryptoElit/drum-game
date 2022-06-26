



for (var i=0; i<document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

    });
}

document.addEventListener("keypress", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});

function makeSound(key) {

    let soundMaker = new Audio();


    switch (key) {
        case "w":
           soundMaker.src = "sounds/tom-1.mp3";
        break;
        case "a":
            soundMaker.src = "sounds/tom-2.mp3";
        break;
        case "s":
            soundMaker.src = "sounds/tom-3.mp3";
        break;
        case "d":
            soundMaker.src = "sounds/tom-4.mp3";
        break;
        case "j":
            soundMaker.src = "sounds/snare.mp3";
        break;
        case "k":
            soundMaker.src = "sounds/kick.mp3";
            break;
        case "l":
            soundMaker.src = "sounds/drum.mp3";
        break;
        }
        soundMaker.play();
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}


   
       
    




 

