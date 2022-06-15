import { useState, useReducer } from 'react';
import './App.css';

function App() {
  const initial = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "add": return state + 1;
      case "sub": return state - 1;
      case "reset": return 0;
      default: return 0;
    }
  }
  const [value, dispatch] = useReducer(reducer, initial)
  return (
    <div className="App">
      <h2>{value}</h2>

      <button onClick={() => dispatch("add")}>Add</button>
      <button onClick={() => dispatch("sub")}>subtract</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
}
export default App;
