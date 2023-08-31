
var buttonColours = ["red", "blue", "green", "yellow"];

var gameStarted = false; 
var gamePattern = [];
var level = 0;

var userClickedPattern = [];


    $(document).one("keypress", function(){
        if (!gameStarted){
            updateHeader();
            nextSequence();
        }
        
    });



function nextSequence() {
    userClickedPattern = [];
    level++;
    updateHeader();
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  
  
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

}
$(".btn").on("click", function(event){
    var userChosenColour =  $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

function playSound(name){
    var audio = new Audio ("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {      
        $("#" + currentColour).removeClass("pressed");         
}, 100);
   // $("#" + currentColour);
}

function updateHeader(){
    $("#level-title").text("Level "+level);
}

function checkAnswer(currentLevel){
    console.log(userClickedPattern + "user");
    console.log(gamePattern + "game");
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel])
    {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function (){
                nextSequence();
                
            }, 1000);
        }
    }else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        $(document).one("keypress", function(){
                startOver();
        });
}
}

function startOver(){
    level = 0; 
    gamePattern = [];
    nextSequence();
}