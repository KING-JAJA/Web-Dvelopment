var x = Math.random() * 6;
x = Math.floor(x) + 1;
// var player1 = x;

var y = Math.random() * 6;
y = Math.floor(y) + 1;
// var player2 = y;


function victorDeclarer (player1, player2){
  if (player1 > player2){
    document.querySelector("h1").innerText = "🚩Player1 Wins!";
  } else if (player1 < player2){
    document.querySelector("h1").innerText = "Player2 Wins!🚩";
  } else {
    document.querySelector("h1").innerText = "Draw!";
  }
}

function dice1Toss(player1){
  if (player1 === 1){
    document.querySelector(".img1").src = "images/dice1.png";
  } else if (player1 === 2){
    document.querySelector(".img1").src = "images/dice2.png";
  } else if (player1 === 3){
    document.querySelector(".img1").src = "images/dice3.png";
  } else if (player1 === 4){
    document.querySelector(".img1").src = "images/dice4.png";
  } else if (player1 === 5){
    document.querySelector(".img1").src = "images/dice5.png";
  } else if (player1 === 6){
    document.querySelector(".img1").src = "images/dice6.png";
  }
}

function dice2Toss(player2){
  if (player2 === 1){
    document.querySelector(".img2").src = "images/dice1.png";
  } else if (player2 === 2){
    document.querySelector(".img2").src = "images/dice2.png";
  } else if (player2 === 3){
    document.querySelector(".img2").src = "images/dice3.png";
  } else if (player2 === 4){
    document.querySelector(".img2").src = "images/dice4.png";
  } else if (player2 === 5){
    document.querySelector(".img2").src = "images/dice5.png";
  } else if (player2 === 6){
    document.querySelector(".img2").src = "images/dice6.png";
  }
}

victorDeclarer(x, y);

dice1Toss(x);

dice2Toss(y);