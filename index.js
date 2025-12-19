let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let aScore = 0;
let bScore = 0;

function addOneHome() {
  aScore ++;
  homeScore.textContent = aScore;  
}

function addTwoHome() {
  aScore += 2;
  homeScore.textContent = aScore;
}

function addThreeHome() {
  aScore += 3;
  homeScore.textContent = aScore;
}



function addOneGuest() {
  bScore ++;
  guestScore.textContent = bScore;  
}

function addTwoGuest() {
  bScore += 2;
  guestScore.textContent = bScore;
}

function addThreeGuest() {
  bScore += 3;
  guestScore.textContent = bScore;
}