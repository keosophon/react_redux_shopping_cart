import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/features/CartSlice";
import { Link } from "react-router-dom";
const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div style={{ padding: "10px", margin: "10px" }}>
        <h3 style={{ textAlign: "right", paddingRight: "50px" }}>
        <Link to="/">Home</Link>
      </h3>
      <h1>Checkout Page</h1>

      

      {cartItems.length === 0 && (
        <p style={{ color: "red", fontSize: "20px" }}>No items in cart</p>
      )}
      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
            width: "200px",
          }}
        >
          <h2>{item.title}</h2>
          <img src={item.image} alt={item.title} width={200} />
          <button
            style={{ color: "red" }}
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
