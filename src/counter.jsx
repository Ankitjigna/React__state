import { useState } from "react";
export default function Counter() {
  let [count , setCount] = useState(0);

  function incCount() {
    setCount(count+1);
    console.log(count);
  }

  return (
    <>
      <h4>count = {count} </h4>
      <button onClick={incCount}>Increase count</button>
    </>
  );
}
