import { useEffect, useReducer } from 'react';

import Header from './Header';
import Main from './Main';

const initialState = {
  questions: [],
  errorMessage: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
      };

    case 'dataFailed':
      return {
        ...state,
        errorMessage: 'Something went wrong',
      };

    default:
      throw new Error('Unknown Action');
  }
}

function App() {
  // implement your fake api in react app: http://localhost:8000/questions
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [questions, setQuestion] = useState([])
  // const [errorMessage, setErrorMessage] = useState('')

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
        <h2>Welcome to the hamro quiz app</h2>
        <h3>There are X questions to be answered and become react mastery</h3>
      </Main>
      <button className="btn btn-ui">Let's Start</button>
    </div>
  );
}

export default App;
