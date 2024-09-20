import React from "react";
import { addToCart } from "../redux/features/CartSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Products = ({ title, image }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        width: "200px",
      }}
    >
      <h2>{title}</h2>
      <img src={image} width={200} alt={title} />
      <button
        style={{ color: "green", width: "100px", fontSize: "20px" }}
        onClick={() => dispatch(addToCart({ title, image }))}
      >
        Add
      </button>
    </div>
  );
};

export default Products;
