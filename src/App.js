import { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import ScoreSection from './components/ScoreSection';
import { quizData } from './data/quizData';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [next, setNext] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (answer) => {
    const newAnswer = {
      question: quizData[currentQuestion].question,
      answer: answer,
      correct: answer === quizData[currentQuestion].correct,
    };

    if (newAnswer.correct) {
      setScore((prevScore) => prevScore + 1);
      setFeedback("○");
    } else {
      setFeedback("×");
    }
    setAnswers([...answers, newAnswer]);
    setNext(true);
  };

  const goToNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    setNext(false);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <ScoreSection score={score} answers={answers} />
      ) : (
        <Quiz
          currentQuestion={currentQuestion}
          quizData={quizData}
          next={next}
          feedback={feedback}
          handleAnswer={handleAnswer}
          goToNextQuestion={goToNextQuestion}
        />
      )}
    </div>
  );
}

export default App;
