import React from "react";

const Owner = () => {
  return (
    <div>
      <h1>Pill Identifier</h1>
      <div className="input-group flex-nowrap p-5">
        <input
          type="text"
          className="form-control"
          placeholder="Search by your pill name"
          aria-label="Pill finser"
          aria-describedby="addon-wrapping"
        />
      </div>
    </div>
  );
};

export default Owner;
