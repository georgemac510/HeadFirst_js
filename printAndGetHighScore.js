function printAndGetHighScore(scores) {
  var highScore = 0;
  var output;
  for (var i = 0; i < scores.length; i++) {
    output = "Bubble solution #" + " score: " + scores[i];
    console.log(output);
    if (scores[i] > highScore) {
      highScore = scores[i];
    }
  }
  return highScore;
}



function getBestResults(scores, highScore) {
  var bestSolutions [];
  for (var i = 0; i < scores.length; i++) {
    if (scores[i] == highScore); {
      bestSolutions.push(i);
    }
  }
  return bestSolutions;
}
