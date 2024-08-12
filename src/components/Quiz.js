import React from 'react';

function Quiz({ currentQuestion, quizData, next, feedback, handleAnswer, goToNextQuestion }) {
  return (
    <div className='question-section'>
      <h1>問題 {currentQuestion + 1} / {quizData.length} </h1>
      <h2>{quizData[currentQuestion].question}</h2>

      {next ? (
        <div className='feedback-section'>
          <h2 className='large-feedback'>{feedback}</h2>
          <h3>解答: {quizData[currentQuestion].correct}</h3>
          <p>補足：{quizData[currentQuestion].supplement}</p>
          <button onClick={goToNextQuestion}>次の問題へ</button>
        </div>
      ) : (
        <div className='answer-section'>
          {quizData[currentQuestion].options.map((item, index) => (
            <button 
              key={index}
              onClick={() => handleAnswer(item)}
              className={`quiz-option-button option-${index}`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Quiz;
