import questions from '../questions.js';
import { useState, useRef, useEffect } from 'react';

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswer, setUserAnswer] = useState([]);
    const [shuffleAnswers, setShuffleAnswers] = useState(true);
    const [isFinished, setIsFinished] = useState(false);
    const answersSelected = useRef([]);
    const shuffledAnswer = useRef([]);
   const questionsLength = questions.length - 1;

   const handleNext = () => {    
   if (currentQuestion < questionsLength) {
      setCurrentQuestion(currentQuestion + 1);
      answersSelected.current.push(userAnswer);
    setShuffleAnswers(true);   
    } else {
      answersSelected.current.push(userAnswer);
      handleSubmit();
    }
  }
  
  useEffect(() => {
    if (shuffleAnswers) {
      shuffledAnswer.current = questions[currentQuestion].answers.sort(() => Math.random() - 0.5);
      setShuffleAnswers(false);
    }
  }, [shuffleAnswers]);

  const handleSaveAnswer = (e) => {
    setUserAnswer(e.target.value);
  }

const handleSubmit = () => {  
  answersSelected.current.map( (answer, index) => {
    console.log(`Question ${index + 1}: ${answer}`);
    return answer;    
  })
  setShuffleAnswers(true);
  setCurrentQuestion(0);
  setUserAnswer([]);
  answersSelected.current = [];
  setIsFinished(true);
}
  
  return (
    <div className='quiz'>
      <h1>Quiz</h1>
      <div>
        { !isFinished ? (
          <>
          <h2>{questions[currentQuestion].text}</h2>
          <ul>
            {shuffledAnswer.current.map((answer, index) => (
              <li key={index} className='answer'>
                  <input
                      type='radio'
                      name='answer'
                      value={answer}                    
                      checked= {userAnswer === answer}
                      onChange={handleSaveAnswer}                                                                                            
                  />
                  <label htmlFor='answer'>{answer}</label>                               
              </li>
            ))}
          </ul>
          <button onClick={handleNext}>
            Next
          </button>
          <p>
            Question {currentQuestion + 1} of {questionsLength + 1}
          </p>
          </>
        ) : (
          <>
          <p>
            Quiz completed!
          </p>
          <button onClick={() => setIsFinished(false)}>
            Restart
          </button>
          </>
        )}        
      </div>
    </div>
  );
}
export default Quiz;