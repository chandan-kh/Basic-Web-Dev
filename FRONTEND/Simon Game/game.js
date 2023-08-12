var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started =  false;


function nextSequence() {
  userClickedPattern = [];

  level++;
  $("#level-title").text("You are in level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

}


$(".btn").on("click",function(){
      var userChosenColour =  $(this).attr("id");
      userClickedPattern.push(userChosenColour);  
      playSound(userChosenColour);
      animatePress(userChosenColour);
      checkAnswer(userClickedPattern.length-1);
})
  
function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

$(document).on('keypress',function(e) {
  if(!started){
    $("#level-title").text("You are in level " + level)
    nextSequence();
    started = true;
  }
})

function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");

    //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
    if (userClickedPattern.length === gamePattern.length){

      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function () {
        nextSequence();
      }, 1000);

    }

  } else {

    console.log("wrong");
    var wrongaudio = new Audio("sounds/wrong.mp3");
    wrongaudio.play();
    $("body").addClass("game-over");
    setTimeout(function () {
    $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart")
    startOver();
  }
}


function startOver(){
   level = 0;
   started=false;
   gamePattern=[];
}