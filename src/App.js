import React, { useState } from "react";
import Person from "./Person/Person";
import "./App.css";

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "____", age: "__" },
      { name: "____", age: "__" },
      { name: "____", age: "__" },
    ],
    otherState: "some other state",
  });

  const [otherState, setOtherState] = useState("some other value");

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Max", age: 23 },
        { name: "Sarah", age: 18 },
        { name: "John", age: 29 },
      ],
    });
  };

  return (
    <div>
      <button onClick={switchNameHandler}>Add People</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Decorating
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;
