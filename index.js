// dices my first solution

// var img = [];
// img[0] = "images/dice1.png";
// img[1] = "images/dice2.png";
// img[2] = "images/dice3.png";
// img[3] = "images/dice4.png";
// img[4] = "images/dice5.png";
// img[5] = "images/dice6.png";
// var randomNumber1 = img[Math.floor(Math.random() * img.length)];
// document.querySelector(".img1").setAttribute("src", randomNumber1);
// var randomNumber2 = img[Math.floor(Math.random() * img.length)];
// document.querySelector(".img2").setAttribute("src", randomNumber2);

// dices 2nd solution

var randomNumber1 = Math.floor(Math.random() * 6 + 1); //1-6
var randomDiceImage = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

// heading my first solution

document.querySelector("h1").innerHTML = "Refresh Me";
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
