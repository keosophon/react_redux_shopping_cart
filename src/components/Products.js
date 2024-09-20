import React from "react";
import AddButton from "./AddButton";

const Products = ({ title, image }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <AddButton />
    </div>
  );
};

export default Products;
