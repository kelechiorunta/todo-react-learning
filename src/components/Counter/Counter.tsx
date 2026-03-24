import { useState } from "react";
// Replace the local variable with useState hook using index as the state variable and setIndex as the setter function

export default function Counter() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }
  return (
    <>
      <h1>Counter</h1>
      <p>{index}</p> <button onClick={handleClick}>Add One</button>
    </>
  );
}
