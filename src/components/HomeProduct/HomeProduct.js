import React from "react";

const Product = (props) => {
  const [name, img, about, price] = props.product;
  return (
    <div>
      <div class="card" style="width: 18rem;">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{about}</p>
          <p>Price : ${price}</p>
          <a href="#" class="btn btn-primary">
            Purchase
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
