import React from "react";
import Products from "./Products";
import image1 from "../images/1.png";
import image2 from "../images/2.png";
import image3 from "../images/3.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Home = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div>
      <div>
        <h1>Home</h1>
        <div>
          <h2 style={{ textAlign: "right", paddingRight: "50px" }}>
            <Link to="/checkout">
              Cart <span style={{ color: "red" }}>{cartItems.length}</span>{" "}
            </Link>
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Products id="1" title="image1" image={image1} />
          <Products id="2" title="image2" image={image2} />
          <Products id="3" title="image3" image={image3} />
        </div>
      </div>
    </div>
  );
};

export default Home;
