// import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    let res = await fetch("https://api.adviceslip.com/advice");
    let data = await res.json();

    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div className="App">
      <div>{advice}</div>
      <button onClick={getAdvice}>Get Advice</button>
      <p>
        You have already taken <strong class="count">{count}</strong> advice.
        You can ask more don't worry about it
      </p>
    </div>
  );
}
