import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import HomeDetail from "../HomeDetail/HomeDetail";
import img from "../../images/home-img.jpg";
// Importing css file
import "./Home.css";
import Pill from "../Pill/Pill";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/Products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="home-header">
        <h1 className="greeting">
          Welcome to <span className="home-text">Royal Care Pharmacy</span>
        </h1>
        <div className="home-container">
          <h3>
            Let food be thy medicine and
            <br />
            <span className="home-text"> medicine be thy food.</span>
          </h3>
          <img className="img-fluid" src={img} alt="" />
        </div>
        <br />
        <h4>
          We deliver the best care. A better way to shop for health and beauty.
          Healthcare for life
        </h4>
      </div>
      <Banner></Banner>
      <Pill></Pill>
      <h3 className="mt-5">Our Products</h3>
      <div className="product-container">
        {products.slice(0, 6).map((product) => (
          <HomeDetail key={product.id} product={product}></HomeDetail>
        ))}
      </div>
    </div>
  );
};

export default Home;
