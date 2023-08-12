var numberOfButton = document.querySelectorAll(".drum").length

for(var i=0;i < numberOfButton ; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function () {
        
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
       
})
}   

document.addEventListener("keypress",function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
});


function makeSound(key){
    switch (key) {
        case "q":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "w":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "e":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
        break;
        case "r":
                    var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
        break;
        case "t":
                        var snare = new Audio("sounds/snare.mp3");
                        snare.play();
        break;
        case "y":
                            var kick = new Audio("sounds/kick-bass.mp3");
                            kick.play();
        break;
        case "u":
                            var crash = new Audio("sounds/crash.mp3");
                            crash.play();
        break;
        
        default:
            break;
}}

function buttonAnimation(currentKey){
    var activbutton = document.querySelector("."+currentKey);
    activbutton.classList.add("pressed");
    setTimeout(function(){
        activbutton.classList.remove("pressed");
    },100);
}