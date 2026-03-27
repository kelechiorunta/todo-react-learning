// Please complete the task by setting an updater function to
// update the age state variable

import { useState } from "react";

export default function CounterI() {
  const [age, setAge] = useState(42);

  function add() {
    //
  }

  return (
    <>
      <h1>Your age: {age}</h1>
      <button
        onClick={() => {
          add();
          add();
          add();
        }}
      >
        +3
      </button>
      <button
        onClick={() => {
          add();
        }}
      >
        +1
      </button>
    </>
  );
}
