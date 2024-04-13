import React from "react";

export const Home = () => {
  const handleClick = () => {
    console.log("you click");
  };

  const handleClickAgain = (name, e) => {
    console.log("My name is " + name);
    console.log(e.target);
  };
  return (
    <div className="home">
      <h1>Our Home Page</h1>
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={(e) => {
          handleClickAgain("Sameera", e);
        }}
      >
        Click Me again
      </button>
    </div>
  );
};
