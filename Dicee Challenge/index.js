
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

//Test on console by adding Math.random(); after playing the above.
var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - dice6.png

//Select an element
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//////////////////

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//Combine lines 5 and 7:
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

//Combine lines 10 and 12:
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!"
}
