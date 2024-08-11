import { useState } from 'react';
import './App.css';

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

    if(newAnswer.correct){
      setScore((prevScore) => prevScore + 1);
      setFeedback("○");
    }else{
      setFeedback("×");
    }
    setAnswers([...answers, newAnswer])
    console.log(answers);
    setNext(true);
  };

  const goToNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < quizData.length){
      setCurrentQuestion(nextQuestion);
    }else{
      setShowScore(true);
    }
    setNext(false);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className='score-section'>
          <h1>スコア</h1>
          <h2 className="final-score">
            {score}/{quizData.length}
          </h2>
          <table className="answer-table">
            <thead>
              <tr>
                <td>質問</td>
                <td>あなたの解答</td>
                <td>合否</td>
              </tr>
            </thead>

            <tbody>
              {answers.map((item) => (
                <tr className={item.correct ? "correct" : "wrong"}>
                  <td>{item.question}</td>
                  <td>{item.answer}</td>
                  <td>{item.correct ? "○" : "×"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className='question-section'>
        <h1>問題 {currentQuestion + 1 } / {quizData.length} </h1>
        <h2>{quizData[currentQuestion].question}</h2>

        {next ? (
          <div className='feedback-section'>
            <h2 className='large-feedback'>{feedback}</h2>
            <p>解答</p>
            <p>{quizData[currentQuestion].correct}</p>
            <button onClick={goToNextQuestion}>次の問題へ</button>
          </div>
        ) : (
          <div className='answer-section'>
          {quizData[currentQuestion].options.map((item, index) => (
            <button 
            key={index}
             onClick={ () => handleAnswer(item)}
             className={`quiz-option-button option-${index}`}>{item}</button>
        ))}
      </div>

        )}
        
      </div>

      )}
      
      
    </div>
  );
}

const quizData = [
  {
    question: "悟りの第二段階の状態は？",
    options: ["予流果","一来果","不還果","阿羅漢果"],
    correct: "一来果",
    supplement: " : 欲界の煩悩を断じ終えた位のこと",
  },
  {
    question: "四聖諦（ししょうたい）はどれか？",
    options: ["苦諦","楽諦","幸諦","怒諦"],
    correct: "苦諦",
    supplement: " : 欲界の煩悩を断じ終えた位のこと",
  },
  {
    question: "a？",
    options: ["予流果","一来果","不還果","阿羅漢果"],
    correct: "一来果",
    supplement: " : 欲界の煩悩を断じ終えた位のこと",
  },{
    question: "b？",
    options: ["予流果","一来果","不還果","阿羅漢果"],
    correct: "一来果",
    supplement: " : 欲界の煩悩を断じ終えた位のこと",
  },
]

export default App;
