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
      <div class="input-group mb-1 p-3">
        <span class="input-group-text">First and last name</span>
        <input type="text" aria-label="First name" class="form-control" />
        <input type="text" aria-label="Last name" class="form-control" />
      </div>
      <div class="mb-1 p-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="p-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Comment or Message
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="button" class="btn btn-primary">
        Submit
      </button>
    </div>
  );
};

export default Contact;
