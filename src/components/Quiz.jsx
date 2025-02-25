import questions from '../questions.js';
import { useState, useRef } from 'react';

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswer, setUserAnswer] = useState([]);
    const answersSelected = useRef([]);
   

   const handleNext = () => {    
   if (currentQuestion < questions.length -1) {
      setCurrentQuestion(currentQuestion + 1);      
    }
    answersSelected.current.push(userAnswer);       
  }
  
const handleSubmit = () => {
  answersSelected.current.map( (answer, index) => {
    console.log(`Question ${index + 1}: ${answer}`);
    return answer;
  }    
  )

  setCurrentQuestion(0);
  setUserAnswer([]);
  answersSelected.current = [];  
}
  
  return (
    <div className='quiz'>
      <h1>Quiz</h1>
      <div>        
        <h2>{questions[currentQuestion].text}</h2>
        <ul>
          {questions[currentQuestion].answers.map((answer, index) => (
            <li key={index} className='answer'>
                <input
                    type='radio'
                    name='answer'
                    value={answer}                    
                    checked= {userAnswer === answer}
                    onChange={(e) => setUserAnswer(e.target.value
                    )}                                                                                            
                />
                <label htmlFor='answer'>{answer}</label>                               
            </li>
          ))}
        </ul>
        <button onClick={handleNext}>
          Next
        </button>
        <button onClick={handleSubmit}>
          Submit Quiz
        </button>
    
      </div>
    </div>
  );
}
export default Quiz;