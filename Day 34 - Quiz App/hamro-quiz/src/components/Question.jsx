function Question({ question }) {
  console.log(question);
  return (
    <div>
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option) => {
          return <button className="btn btn-option">{option}</button>;
        })}
      </div>
    </div>
  );
}

export default Question;
