function LandingScreen({ dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the hamro quiz app</h2>
      <h3>There are X questions to be answered and become react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'startQuiz' })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default LandingScreen;
