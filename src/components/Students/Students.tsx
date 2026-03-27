/**
 * Title: Students' List
 * Instructions
 * Create a student state variable(which is an array) using useState
 * Pass in the students array below as an initialState value
 * Choose your state structure wisely
 *
 */

import React from "react";

const students = [{ name: "Tega", course: "React", level: "intermediate" }];

export default function Students() {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //Complete the function by updating the student state variable name property
  };
  const handleCourseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //Complete the function by updating the student state variable course property
  };
  const handleLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //Complete the function by updating the student state variable level property
  };

  const addStudent = () => {
    //Update the student state variable(which is an array of students) with a new student
    //using the spread syntax.
  };
  return (
    <div>
      <h1>Students</h1>
      <div>
        <label htmlFor="name">
          <input
            name="name"
            type="string"
            placeholder="Enter Name"
            onChange={handleNameChange}
          />
        </label>

        <label htmlFor="course">
          <input
            name="course"
            type="string"
            placeholder="Enter Course"
            onChange={handleCourseChange}
          />
        </label>

        <label htmlFor="level">
          <input
            name="level"
            type="string"
            placeholder="Enter Level"
            onChange={handleLevelChange}
          />
        </label>
      </div>
      <button onClick={() => addStudent()}>Add Student</button>
    </div>
  );
}
