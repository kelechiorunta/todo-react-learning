// Please complete the task by updating the state properties
// of the Person state object using useState hook

import React, { useState } from "react";

export default function Task1() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
    },
  });

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    //Update the name of the Person's state object variable using the spread syntax
  }

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    //Update the title of the artwork object of the Person's state object variable using the spread syntax
  }

  function handleCityChange(e: React.ChangeEvent<HTMLInputElement>) {
    //Update the city of the artwork object of the Person's state object variable using the spread syntax
  }

  return (
    <>
      <label>
        Name:
        <input value={person.name} onChange={handleNameChange} />
      </label>
      <label>
        Title:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <label>
        City:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {" by "}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
    </>
  );
}
