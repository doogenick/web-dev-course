var roll1 = Math.random() * 6;
roll1 = Math.floor(roll1) + 1;
console.log("roll1: "+roll1);
var roll2 = Math.random() * 6;
roll2 = Math.floor(roll2) + 1;
console.log(roll2);

var dice1src = "./images/dice" +roll1+ ".png";
var dice2src = "./images/dice" +roll2+ ".png";

document.querySelector("img.img1").setAttribute("src",dice1src);
document.querySelector("img.img2").setAttribute("src",dice2src);

/*if (roll1 === 1){
    document.querySelector("img.img1").setAttribute("src","./images/dice1.png");
}else if (roll1 === 2){
    document.querySelector("img.img1").setAttribute("src","./images/dice2.png");
}else if (roll1 === 3){
    document.querySelector("img.img1").setAttribute("src","./images/dice3.png");
}else if (roll1 === 4){
    document.querySelector("img.img1").setAttribute("src","./images/dice4.png");
}else if (roll1 === 5){
    document.querySelector("img.img1").setAttribute("src","./images/dice5.png");
}else {
    document.querySelector("img.img1").setAttribute("src","./images/dice6.png");
}

if (roll2 === 1){
    document.querySelector("img.img2").setAttribute("src","./images/dice1.png");
}else if (roll2 === 2){
    document.querySelector("img.img2").setAttribute("src","./images/dice2.png");
}else if (roll2 === 3){
    document.querySelector("img.img2").setAttribute("src","./images/dice3.png");
}else if (roll2 === 4){
    document.querySelector("img.img2").setAttribute("src","./images/dice4.png");
}else if (roll2 === 5){
    document.querySelector("img.img2").setAttribute("src","./images/dice5.png");
}else {
    document.querySelector("img.img2").setAttribute("src","./images/dice6.png");
}*/ 

if (roll1 > roll2){
    document.querySelector("h1").textContent = "Player 1 Wins";
}

else if(roll2 > roll1){
    document.querySelector("h1").textContent = "Player 2 Wins";
}else{
    document.querySelector("h1").textContent = "Draw";
}