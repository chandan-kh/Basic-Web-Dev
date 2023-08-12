var rn1=Math.random();
rn1=rn1*6;
rn1=Math.floor(rn1);
rn1=rn1+1;
var rnDiceImage1="dice"+rn1+".png";
var op1="images/"+rnDiceImage1;
console.log(op1);

var rn2=Math.random();
rn2=rn2*6;
rn2=Math.floor(rn2);
rn2=rn2+1;
var rnDiceImage2="dice"+rn2+".png";
var op2="images/"+rnDiceImage2;
console.log(op2);


document.querySelectorAll("img")[0].setAttribute("src",op1);
document.querySelectorAll("img")[1].setAttribute("src",op2);

if(rn1>rn2){
    document.querySelector("h1").innerHTML = "Player 1 Wins !";
}
else if(rn2>rn1){
    document.querySelector("h1").innerHTML = "Player 2 Wins !";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}