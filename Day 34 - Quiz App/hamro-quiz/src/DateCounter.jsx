import { useReducer, useState } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step };
    case 'decrement':
      return { ...state, count: state.count - state.step };
    case 'defineCount':
      return { ...state, count: action.payload };
    case 'defineStep':
      return { ...state, step: action.payload };
    case 'reset':
      return { count: 0, step: 1 };
    default:
      throw new Error('Undefined task');
  }

  // if (action.type === 'increment')
  //   return { ...state, count: state.count + state.step };
  // if (action.type === 'decrement')
  //   return { ...state, count: state.count - state.step };
  // if (action.type === 'defineCount') return { ...state, count: action.payload };
  // if (action.type === 'defineStep') return { ...state, step: action.payload };
  // if (action.type === 'reset') return { count: 0, step: 1 };
  return { ...state };
}

function DateCounter() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);
  const initialState = {
    count: 0,
    step: 1,
  };

  const [value, dispatch] = useReducer(reducer, initialState);

  // This mutates the date object.
  const date = new Date('june 21 2027');
  date.setDate(date.getDate() + value.count);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    // dispatch(-1);
    dispatch({ type: 'decrement' });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    dispatch({ type: 'increment' });
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatch({ type: 'defineCount', payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
    dispatch({ type: 'defineStep', payload: Number(e.target.value) });
  };

  const reset = function () {
    // setCount(0);
    // setStep(1);
    dispatch({ type: 'reset' });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={value.step}
          onChange={defineStep}
        />
        <span>{value.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={value.count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
