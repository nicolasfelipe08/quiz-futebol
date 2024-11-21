import React, { useState } from 'react';
import './App.css';
import Question from './Question';

const App = () => {
  const questions = [
    {
      question: "Quem ganhou a Copa do Mundo de 2002?",
      options: ["Brasil", "Alemanha", "Argentina", "França"],
      correctAnswer: "Brasil"
    },
    {
      question: "Qual time é conhecido como 'Os Galácticos'?",
      options: ["Barcelona", "Real Madrid", "Manchester United", "AC Milan"],
      correctAnswer: "Real Madrid"
    },
    {
      question: "Quem é o maior artilheiro da história da Copa do Mundo?",
      options: ["Ronaldo", "Marta", "Mirolav Klose", "Pelé"],
      correctAnswer: "Mirolav Klose"
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswer = (selectedAnswer) => {
    if (questions[currentQuestionIndex].correctAnswer === selectedAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsQuizFinished(false);
  };

  return (
    <div className="App">
      <h1>Quiz de Futebol</h1>
      {!isQuizFinished ? (
        <Question
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          onAnswer={handleAnswer}
        />
      ) : (
        <div>
          <h2>Quiz Concluído!</h2>
          <p>Sua pontuação é: {score} / {questions.length}</p>
          <button onClick={resetQuiz}>Reiniciar</button>
        </div>
      )}
    </div>
  );
};

export default App;
