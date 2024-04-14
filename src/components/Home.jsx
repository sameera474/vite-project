import React from "react";
import { useState } from "react";
import { CategoryList } from "./CategoryList";

export const Home = () => {
  const categories = [
    { id: 1, name: "electronics" },
    { id: 2, name: "jewelery" },
    { id: 3, name: "men's clothing" },
    { id: 4, name: "women's clothing" },
  ];

  const featuredCategories = [
    { id: 1, name: "Shoes" },
    { id: 2, name: "Sport" },
    { id: 3, name: "Socks" },
    { id: 4, name: "Caps" },
  ];

  return (
    <div className="home">
      <div>
        <CategoryList categories={categories} title="All Categories" />
      </div>
      <div>
        <CategoryList
          categories={featuredCategories}
          title="Featured Categories"
        />
      </div>
    </div>
  );
};
