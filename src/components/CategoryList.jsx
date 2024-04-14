import React from "react";

export const CategoryList = ({ categories, title }) => {
  console.log(categories);
  console.log(title);
  return (
    <>
      <h1 className="category-title">{title}</h1>
      <div className="categories-row">
        {categories.map((item) => (
          <div className="category" key={item.id}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};
