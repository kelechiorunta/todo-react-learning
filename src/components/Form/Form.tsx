//Can you help help identify the redundant states. How can we correct it?

import { useState } from "react";

interface ClockProps {
  color?: string;
  time?: string;
}

function Clock(props: ClockProps) {
  //const [color, setColor] = useState(props.color);
  
  return <h1 style={{ color: props.color }}>{props.time}</h1>;
}

export default function Form() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [fullName, setFullName] = useState("");
  const [name, setName] = useState({
    firstName: "",
    lastName: ""
  })
  const fullName = `${name.firstName} ${name.lastName}`;

  function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    //setFirstName(e.target.value);
    //setFullName(e.target.value + " " + lastName);
    setName({...name, firstName: e.target.value})
  }

  function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    //setLastName(e.target.value);
    setName({...name, lastName: e.target.value})
    //setFullName(firstName + " " + e.target.value);
  }

  return (
    <>
      <Clock />
      <h2>Let’s check you in</h2>
      <label>
        First name: <input value={name.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name: <input value={name.lastName} onChange={handleLastNameChange} />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}
