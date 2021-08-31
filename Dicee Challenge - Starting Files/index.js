var diceNumber = Math.floor(Math.random()*6)+1;
var diceImageNumber = "images/dice"+diceNumber+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",diceImageNumber)

var dice2Number = Math.floor(Math.random()*6)+1;
var dice2ImageNumber = "images/dice"+dice2Number+".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src",dice2ImageNumber)

if(diceNumber>dice2Number){
    document.querySelector("h1").innerHTML="Player One WON!!!"
}
else if(dice2Number>diceNumber){
    document.querySelector("h1").innerHTML="Player Two WON!!!"
}
else{
    document.querySelector("h1").innerHTML="IT's A DRAW!!!"

}