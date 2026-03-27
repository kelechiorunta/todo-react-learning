// Please complete the task by setting an updater function to
// update the age state variable in the add function

import { useState } from "react";

export default function Task2() {
  const [age, setAge] = useState(42);

  function add() {
    //
    setAge((age) => age + 1);
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
