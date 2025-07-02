import { useState } from "react";

function Counter() {
  const [Counter, setCounter] = useState(0);

  const handleCounter = (type)=> {
      type == "INCREMENT" ? 
      (Counter < 20 ? setCounter(Counter + 1) : setCounter(Counter) ) : 
      (Counter > 0 ? setCounter(Counter - 1) : setCounter(Counter))
  }

  return (
    <div>
      <h1>Counter</h1>

      <button onClick={() => handleCounter("DECREMENT")} >
        -
      </button>

      <span>{Counter}</span>

      <button onClick={() => handleCounter("INCREMENT")}>
        +
      </button>

      <hr />
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
}

export default Counter;
