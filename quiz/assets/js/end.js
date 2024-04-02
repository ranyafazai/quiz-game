const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const result = document.getElementById("result");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

let listOfCards=["monoprix","grait","zen","exist","fatales","maxi-mag"];

const MAX_HIGH_SCORES = 5;
finalScore.innerText ="Score : "+ mostRecentScore;

if(parseInt(mostRecentScore)>=5){
  var randomIndex = Math.floor(Math.random() * listOfCards.length);
  let valueInLocalStorage=localStorage.getItem(listOfCards[randomIndex]);
let bonus= Math.floor(Math.random() * 50)+ 1
  valueInLocalStorage=parseInt(valueInLocalStorage)+bonus;
  localStorage.setItem(listOfCards[randomIndex],valueInLocalStorage);
  result.innerText="Result: gained "+bonus+" points on the card of"+listOfCards[randomIndex];
}else{
  result.innerText="Result : You have lost"
}

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

function saveHighScore(e) {
  e.preventDefault();

  const score = {
    score: finalScore.innerText,
  };

  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("../html/highscores.html");
};
