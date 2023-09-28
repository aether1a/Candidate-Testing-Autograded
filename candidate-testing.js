const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = [
  "Who was the first American woman in space?",
  "True or false: 5 kilometer == 5000 meters?",
  "(5 + 3)/2 * 10 = ?",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", 
  "What is the minimum crew size for the ISS?"
];

let correctAnswer = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];

let candidateAnswer = [];
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Candidate Name: ");
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  console.log("Greetings, " + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
 
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (let i = 0; i < question.length; i++) {
  let answer = input.question(question[i] + " ");
candidateAnswer.push(answer);
}
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
let answerCorrect = 0
  
for (let j = 0; j < question.length; j++) {
  console.log(`\n${j+1}) ${question[j]}`);
  console.log(`Your Answer: ${candidateAnswer[j]}`);
  console.log(`Correct Answer: ${correctAnswer[j]}\n`);
  
  if(candidateAnswer[j].toLowerCase() === correctAnswer[j].toLowerCase()) {
  answerCorrect++;
  }
}

  let score = (answerCorrect / question.length) * 100;

  console.log(`>>> Overall Grade: ${score}% (${answerCorrect} of 5 responses correct) <<<`)

  if (score >= 80) {
    console.log(`>>> Status: PASSED <<<`);
  } else {
    console.log(`>>> Status: FAILED <<<`);
  }
  let grade;
  
  return grade;
}



// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};