import React from "react";
import { useParams } from "react";

export const ProductDetails = () => {
  const { id } = useParams();

  return (
    <divThis is the>
      Product Details Page {id}
    </divThis>
  );
};
