/**
 * Title: Students' List
 * Instructions
 * Create an allStudents state variable(which is an array) using useState
 * Pass in the students array below as an initialState value to the alStudents
 * Create a student state variable object with name, course and level properties initialized to empty strings
 * Map the allStudents array to form a list of updated students
 * Choose your state structure wisely
 *
 */

import React from "react";

interface StudentType {
  name: string;
  course: string;
  level: string;
}

const students: StudentType[] = [
  { name: "Tega", course: "React", level: "intermediate" },
];

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
      {/* Uncomment this and complete the mapping of the students */}
      {/* <ul>
        {allStudents.map((s: StudentType) => (
          <>
            <li>{s.name}</li>
            <li>{s.course}</li>
            <li>{s.level}</li>
          </>
        ))}
      </ul> */}
      <button onClick={() => addStudent()}>Add Student</button>
    </div>
  );
}
