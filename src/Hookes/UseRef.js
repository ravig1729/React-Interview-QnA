import { useState, useEffect, useRef, Fragment } from "react";
import ReactDOM from "react-dom/client";

function UseRef() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <Fragment>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </Fragment>
  );
}

export default UseRef;