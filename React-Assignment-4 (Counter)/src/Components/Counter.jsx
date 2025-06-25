import { useState } from "react";

function Counter() {
  const [Counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Counter</h1>

      <button onClick={() =>   Counter < 20 ? setCounter(Counter + 1) : setCounter(Counter)} >
        +
      </button>

      <span>{Counter}</span>

      <button onClick={() => Counter > 0 ? setCounter(Counter - 1) : setCounter(Counter)}>
        -
      </button>

      <hr />
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
}

export default Counter;
