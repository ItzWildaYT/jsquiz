let currentQuestion = 1;

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

function checkAnswer(questionNumber) {
  const selectedAnswer = document.querySelector(`input[name="q${questionNumber}"]:checked`);
  if (!selectedAnswer) {
    alert("Please select an answer.");
    return;
  }

  const userAnswer = selectedAnswer.value;
  const correctAnswer = answers[`q${questionNumber}`];

  if (userAnswer === correctAnswer) {
    alert("Correct!");
  } else {
    alert("Incorrect. The correct answer is: " + correctAnswer);
  }

  // Hide current question and show the next question
  document.getElementById(`question${questionNumber}`).style.display = "none";
  if (questionNumber < 15) {
    document.getElementById(`question${questionNumber + 1}`).style.display = "block";
  } else {
    document.getElementById('result').style.display = "block";
    document.getElementById('result').innerHTML = "Quiz Complete!";
  }
}
