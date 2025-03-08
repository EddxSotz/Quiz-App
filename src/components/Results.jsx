import questions from "../questions";

function Results({ userAnswers }) {  
   
  return (
    <div>
      <h1>Your Results</h1>
      <div>
        {questions.map((question, index) => (
          <div key={question.id}>
            <h3><span>#{index + 1 }: </span>{question.text}</h3>            
            <p>The Correct answer: {question.answers[0]}</p>   
            <p>Your answer: { userAnswers[index]}</p>
            {question.correctAnswer === userAnswers[index] ? (
              <p id="correct-answer">Correct!</p>
            ) : (
              <p id="incorrect-answer">Incorrect!</p>
            )}       
          </div>
        ))}
      </div>
    </div>
  );
}
export default Results;