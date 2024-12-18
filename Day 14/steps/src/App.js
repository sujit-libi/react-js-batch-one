import { useState } from 'react';

const messageArr = [
  'It takes courage to grow up and become who you really are.',
  "Your self-worth is determined by you. You don't have to depend on someone telling you who you are.",
  'Attitude is a little thing that makes a big difference.',
];

function App() {
  const [num, setNum] = useState(0);

  function _handlePrevious() {
    if (num > 0) setNum(num - 1);
  }

  function _handleNext() {
    if (num < 2) setNum((prevNum) => prevNum + 1);
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${num >= 0 ? 'active' : ''}`}>1</div>
        <div className={`${num >= 1 ? 'active' : ''}`}>2</div>
        <div className={`${num >= 2 ? 'active' : ''}`}>3</div>
      </div>
      <p className="messages">{messageArr[num]}</p>
      <div className="buttons">
        <button
          onClick={_handlePrevious}
          style={{ backgroundColor: '#7950f2', color: '#fff' }}
        >
          Previous
        </button>
        <button
          onClick={_handleNext}
          style={{ backgroundColor: '#7950f2', color: '#fff' }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
