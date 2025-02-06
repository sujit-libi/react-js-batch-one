import { useState, memo, useMemo } from 'react';

function Test() {
  const [count, setCount] = useState(0);
  // const [isOpen, setIsOpen] = useState(false);

  //  const data = {
  //   isOpen: false,
  //   name: "Ram"
  //  }

  const data = useMemo(() => {
    return {
      isOpen: false,
      name: 'Ram',
    };
  }, []);

  function increment() {
    setCount((count) => count + 1);
  }

  function decrement() {
    setCount((count) => count - 1);
  }
  return (
    <div>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
      <ChildTest data={data} />
    </div>
  );
}

const ChildTest = memo(function ChildTest({ data }) {
  console.log(data);
  return (
    <div>
      This is just Child component: {data.isOpen ? 'True' : 'False'} {data.name}
    </div>
  );
});

export default Test;
