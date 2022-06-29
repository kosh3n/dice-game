let randomNumber1 = Math.floor(Math.random() * 6) + 1; //set random number for dice1
let randomNumber2 = Math.floor(Math.random() * 6) + 1; //set random number for dice2

let randomDiceImg1 = "images/dice" + randomNumber1 + ".png"; //set random src for dice1
let randomDiceImg2 = "images/dice" + randomNumber2 + ".png"; //set random src for dice2

let img1 = document.querySelector('.img1');
img1.setAttribute("src", randomDiceImg1); //write src for dice1

let img2 = document.querySelector('.img2');
img2.setAttribute("src", randomDiceImg2); //write src for dice1

if (randomNumber1 === randomNumber2) {
    document.querySelector('h1').innerHTML = "Draw! &#127884";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = "Player 1 Wins!&#127937; ";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = "Player 2 Wins!&#127937";
}