import React from "react";

export const CategoryList = (props) => {
  console.log(props.categories);
  console.log(props.title);
  return (
    <>
      <h1>{props.title}</h1>
      <div className="categories-row">
        {props.categories.map((item) => (
          <div className="category" key={item.id}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};
