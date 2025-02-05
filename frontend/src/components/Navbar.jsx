import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-64 md:w-auto"
          />
        </div>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary">Button</a>
      </div>
    </div>
  );
}

export default Navbar;
