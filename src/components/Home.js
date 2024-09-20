import React from "react";
import Products from "./Products";
import image1 from "../images/1.png";
import image2 from "../images/2.png";
import image3 from "../images/3.png";

const Home = () => {
  return (
    <div>
      <div>
        <h1>Home</h1>
        <div>
          <h2>Cart</h2>
        </div>
        <div>
          <Products title="image1" image={image1} />
          <Products title="image2" image={image2} />
          <Products title="image3" image={image3} />
        </div>
      </div>
    </div>
  );
};

export default Home;
