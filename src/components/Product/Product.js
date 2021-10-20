import React from "react";
// Importing css file
import "./Product.css";
const product = (props) => {
  const { img, name, Price, about } = props.product;
  return (
    <div>
      <div className="container">
        <div className="card">
          <img src={img} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p>{about}</p>
            <h5>Price:${Price}</h5>
            <button className="btn btn-primary">Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default product;
