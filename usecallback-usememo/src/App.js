import React, { useCallback, useMemo, useState } from "react";
import './App.css';
import Child from './Child';
function App() {
  const [count, setCount] = useState(0);
  const increaseCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, [setCount]);

  const result = useMemo(() => {
    var i = 0;
    console.time("reult");
    while (i < 1000000) {
      i++;
    }
    console.timeEnd("result");
    return i;
  }, []);

  return (
    <div className="App">
      <h1>Performace optimisation in react {count} and Reuslt is :{result}</h1>
      <Child increaseCount={increaseCount} />
    </div>
  );
}

export default App;
