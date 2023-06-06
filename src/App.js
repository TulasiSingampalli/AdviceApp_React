import "./styles.css";
import axios from "axios";
import { useState, useEffect } from "react";
export default function App() {
  const [next, setNext] = useState(false);
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.adviceslip.com/advice`)
      .then((res) => res.data.slip.advice)
      .then((advice) => setAdvice(advice));
  }, [next]);

  return (
    <div className="App">
      <h1>{advice}</h1>
      <button onClick={() => setNext(!next)}>GIVE ME ADVICE! !</button>
    </div>
  );
}
