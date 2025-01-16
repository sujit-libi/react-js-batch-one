import { useEffect, useReducer } from 'react';

import Header from './Header';
import Main from './Main';
import Loader from './Loader';
import Error from './Error';
import LandingScreen from './LandingScreen';
import Question from './Question';

const initialState = {
  index: 0,
  questions: [],
  errorMessage: '',
  status: 'loading', // loading, error, ready, active, finished
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      };

    case 'dataFailed':
      return {
        ...state,
        errorMessage: 'Something went wrong',
        status: 'error',
      };

    case 'startQuiz':
      return {
        ...state,
        status: 'active',
      };

    default:
      throw new Error('Unknown Action');
  }
}

function App() {
  // implement your fake api in react app: http://localhost:8000/questions
  const [{ status, questions, index }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    fetch('http://localhost:8000/questions')
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data })) // setQuestion(data)
      .catch((err) => dispatch({ type: 'dataFailed' })); // setErrorMessage(error.message)
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <LandingScreen dispatch={dispatch} />}
        {status === 'active' && <Question question={questions[index]} />}
      </Main>
    </div>
  );
}

export default App;
