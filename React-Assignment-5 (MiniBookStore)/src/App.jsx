import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Fiction from './components/Fiction';
import NonFiction from './components/NonFiction';

function App() {
  const [flag , setflag] = useState(false)

  return (
    <div className='container mt-5'>
      <h1 style={{textAlign: "center"}}>Mini Book Store</h1>

    <div className='d-flex justify-content-center mt-5'>
      <button onClick={()=>setflag(!flag)} data-testid="toggle-btn" className="btn btn-outline-dark">
        {!flag ? "Show Non-Fiction Books" : "Show Fictional Books"}
      </button>
    </div>

      <div data-testid="conditional-container">
        {/* Render either Fiction or NonFiction Based on the Condition */}
        {!flag ? <Fiction /> : <NonFiction />}
      </div>
    </div>
  );
}

export default App;
