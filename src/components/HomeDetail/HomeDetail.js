import React, { useEffect, useState } from "react";
import "./HomeDetail.css";

const HomeDetail = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./Products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      {products.map((product) => (
        <div class="card">
          <img src={product.img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{product.name}</h5>
            <p class="card-text">{product.about}</p>
            <p>Price : ${product.price}</p>
            <a href="#" class="btn btn-primary">
              Purchase
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeDetail;
