import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <h1>Location of Outlets:</h1>
        Uttara Outlet: Mark Mansion, 36 Sonargaon Janapath, Sector 9, Uttara
        Mohammadpur Outlet: 18, Adorsho Chaya Nir Housing, Ring Road, Adabor,
        Dhaka-1207 Dhanmondi Outlet: Old UIU Building, House 80, Road 8/A,
        Satmasjid Road, Dhanmondi, Dhaka, Bangladesh Dhaka Medical College
        Hospital outlet: House 14/2, Ground Floor, Bakshi Bazar Banasree Outlet:
        Road-4, House 36, Block-C, Dhaka, Bangladesh Banani Outlet: Road-17,
        Plot-5, C/A, Dhaka-1213 Wari Outlet: 11, Nawab Abdul Goni Street
      </div>
      <div className="p-3 m-3">
        <h2>For any query:</h2>
      </div>
      <div className="input-group mb-1 p-3">
        <span className="input-group-text">First and last name</span>
        <input type="text" aria-label="First name" className="form-control" />
        <input type="text" aria-label="Last name" className="form-control" />
      </div>
      <div className="mb-1 p-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="p-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Comment or Message
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="button" className="btn btn-primary">
        Submit
      </button>
    </div>
  );
};

export default Contact;
