import questions from "../questions";
import { useEffect } from "react";

function Results({ userAnswers }) {

const missingAnswersFiltering = questions.map((question) => {
    const userAnswer = userAnswers.find((answer) => answer === question.answers.map((answer) => answer));

    if (!userAnswer) {
      return {
        ...question,
        userAnswer: 'No answer selected',
      };        
    } else 
      return {
        ...question,
        userAnswer: userAnswer.answer,
      };
    });  

  return (
    <div>
      <h1>Your Results</h1>
      <div>
        {questions.map((question, index) => (
          <div key={question.id}>
            <h3>{question.text}</h3>            
            <p>The Correct answer: {question.answers[0]}</p>
            <p>Your answer: {missingAnswersFiltering[index].userAnswer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Results;