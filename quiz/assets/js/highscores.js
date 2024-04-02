const highScoresList = document.getElementById("highScoresList");
//const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
//change last one json
let highScores = [];
const highScoresData = localStorage.getItem("highScores");

if (highScoresData !== null) {
  // Split the stored string by a delimiter (for example, a comma)
  highScores = highScoresData.split(",");
}

// Show Leaderboard
highScoresList.innerHTML = highScores.map(function(score) {
  return '<li class="high-score">' + score.name + ' - ' + score.score + '</li>';
}).join("");
