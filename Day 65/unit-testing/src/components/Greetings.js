import { useState } from 'react';

function Greetings() {
  const [textChanged, setTextChanged] = useState(false);

  function handleOnTextChanged() {
    setTextChanged(true);
  }

  return (
    <div>
      <h2>Namaster User!</h2>
      {!textChanged && <p>You are welcome to paradise! </p>}
      {textChanged && <p>Changed</p>}
      <button onClick={handleOnTextChanged}>Click</button>
    </div>
  );
}

export default Greetings;
