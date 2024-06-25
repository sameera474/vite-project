import React from "react";
import { useState, useEffect } from "react";
import { CategoryList } from "./CategoryList";

export const Home = () => {
  const categories = [
    { id: 1, name: "electronics" },
    { id: 2, name: "jewelery" },
    { id: 3, name: "men's clothing" },
    { id: 4, name: "women's clothing" },
  ];

  // const products = [
  //   { id: 1, name: "Iphone 15 Pro Max", categoryId: 1 },
  //   { id: 2, name: "Lenovo Laptop", categoryId: 1 },
  //   { id: 3, name: "White Gold", categoryId: 2 },
  //   { id: 4, name: "Bracelet", categoryId: 2 },
  //   { id: 5, name: "Nike", categoryId: 3 },
  //   { id: 6, name: "Addidas", categoryId: 3 },
  //   { id: 7, name: "Mango", categoryId: 4 },
  //   { id: 8, name: "Zara", categoryId: 4 },
  // ];
  // const featuredCategories = [
  //   { id: 1, name: "Shoes" },
  //   { id: 2, name: "Sport" },
  //   { id: 3, name: "Child" },
  //   { id: 4, name: "Caps" },
  // ];

  const [selectedCategoryName, setSelectedCategoryName] =
    useState("electronics");
  const [categorisedProducts, setcategorisedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSelectCategory = (clickedCategoryName) => {
    // console.log(products);
    // const filteredProducts = products.filter(
    //   (product) => product.categoryId === clickedCategoryId
    // );
    // console.log(filteredProducts);
    // console.log(clickedCategoryName);
    // setSelectedProducts(filteredProducts);

    setSelectedCategoryName(clickedCategoryName);
    setIsLoading(true);
  };

  useEffect(() => {
    // console.log(selectedCategoryName);
    const fetchProduct = async () => {
      try {
        const url = `https://fakestoreapi.com/products/category/${selectedCategoryName}`;
        const response = await fetch(url);
        if (response.ok) {
          const product = await response.json();
          setcategorisedProducts(product);
          setIsLoading(false);
          // console.log(product);
          // setSelectedProducts(product);
        } else {
          throw new Error("Can't fetch product");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [selectedCategoryName]);

  // console.log(selectedProducts);

  return (
    <div className="home">
      <div>
        <CategoryList
          categories={categories}
          title="All Categories"
          onSelectCategory={onSelectCategory}
        />
        <div className="products-container">
          {isLoading ? (
            <div className="loader"></div>
          ) : (
            categorisedProducts.map((product) => (
              <div key={product.id} className="product-box">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>{product.category}</p>
                <p className="price">Price: {product.price}</p>
                <p>
                  {product.rating.rate}({product.rating.count} reviews)
                </p>
                <button>See Details</button>
                {/* {product.title} */}
              </div>
            ))
          )}
        </div>
      </div>
      {/* <div>
        <CategoryList
          categories={featuredCategories}
          title="Featured Categories"
        />
      </div> */}
    </div>
  );
};
