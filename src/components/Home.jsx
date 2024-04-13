import React from "react";
import { useState } from "react";

export const Home = () => {
  const [name, setName] = useState("sameera");

  const [age, setage] = useState(20);

  const handleClick = () => {
    setName("Wagaarachchige");
    setage(30);
    console.log(name);
  };

  // const handleClickAgain = (name, e) => {
  //   console.log("My name is " + name);
  //   console.log(e.target);
  // };

  return (
    <div className="home">
      <h1>Our Home Page</h1>
      <button onClick={handleClick}>Click Me</button>
      {/* <button
        onClick={(event) => {
          event.preventDefault();
          handleClickAgain("Sameera", event);
        }}
      >
        Click Me again
      </button> */}
      <p>My Name is {name}</p>
      <p>My age is {age}</p>
    </div>
  );
};
