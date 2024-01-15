import { useState } from 'react'
import './App.css'
import Question from './components/Question'

const quizList = [
  {
    question: "Quelle est la capitale de la France ?",
    responses: ['Paris', 'Berlin', 'Londres', 'Madrid'],
    correctAnswer: 0
  },
  {
    question: "Quelle est la capitale de l'Espagne ?",
    responses: ['Paris', 'Berlin', 'Londres', 'Madrid'],
    correctAnswer: 3
  },
  {
    question: "Quelle est la capitale de l'Angleterre ?",
    responses: ['Paris', 'Berlin', 'Londres', 'Madrid'],
    correctAnswer: 2
  },
  {
    question: "Quelle est la capitale de l'Allemagne ?",
    responses: ['Paris', 'Berlin', 'Londres', 'Madrid'],
    correctAnswer: 1
  },
]

function App() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuestions, setShowQuestions] = useState(true);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === quizList[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if(currentQuestion < quizList.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowQuestions(false);
    }
  }

  return (
    <div className="app-container">
      <h1>Quizz démo</h1>
      <h2>Score : {score}</h2>
      {showQuestions && <Question 
      question={quizList[currentQuestion].question}
      responses={quizList[currentQuestion].responses}
      onAnswerClick={handleAnswer}
      />}
    </div>
  )
}

export default App
