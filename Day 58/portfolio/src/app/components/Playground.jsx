'use client';

import { useEffect, useState } from 'react';

// METHOD 1:

// function Playground() {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     setCounter(Math.random());
//   }, []);
//   return <div>This is random number: {counter}</div>;
// }

// export default Playground;

// METHOD 2:

function Playground() {
  const [counter, setCounter] = useState(Math.random());
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  if (!isLoading) return <div>Data is Loading......</div>;

  return <div>This is random number: {counter}</div>;
}

export default Playground;
