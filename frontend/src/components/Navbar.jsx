import React, { useState } from "react";
import ModalAddUser from "./modal/ModalAddUser";

function Navbar() {
  const [addUser, setAddUser] = useState(false);
  return (
    <>
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
          <a onClick={() => setAddUser(true)} className="btn btn-primary">
            Add User
          </a>
        </div>
      </div>
      <ModalAddUser addUser={addUser} setAddUser={setAddUser} />
    </>
  );
}

export default Navbar;
