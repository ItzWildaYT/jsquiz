function checkAnswers() {
  const answers = {
    q1: 'A',
    q2: 'A',
    q3: 'B',
    q4: 'B',
    q5: 'B',
    q6: 'A',
    q7: 'B',
    q8: 'B',
    q9: 'A',
    q10: 'C',
    q11: 'B',
    q12: 'A',
    q13: 'B',
    q14: 'B',
    q15: 'B'
  };

  const form = document.getElementById('quizForm');
  let score = 0;
  let totalQuestions = Object.keys(answers).length;

  for (let q in answers) {
    const userAnswer = form.querySelector(`input[name="${q}"]:checked`);
    if (userAnswer && userAnswer.value === answers[q]) {
      score++;
    }
  }

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `You got ${score} out of ${totalQuestions} correct!`;

  if (score === totalQuestions) {
    resultDiv.innerHTML += "<br>Excellent job!";
  } else if (score > totalQuestions / 2) {
    resultDiv.innerHTML += "<br>Good work!";
  } else {
    resultDiv.innerHTML += "<br>Keep practicing!";
  }
}
