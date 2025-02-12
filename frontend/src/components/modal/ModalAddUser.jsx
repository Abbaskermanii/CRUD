import React from "react";

function ModalAddUser({ addUser, setAddUser }) {
  if (!addUser) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <div className="modal-box relative p-6 shadow-lg rounded-lg bg-base-200 w-96">
        <h3 className="font-bold text-lg text-center mb-4">Add user</h3>
        <button
          onClick={() => setAddUser(false)}
          className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
        >
          ✕
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            className="input input-bordered w-full bg-base-100"
            placeholder="Username"
          />
          <input
            type="email"
            className="input input-bordered w-full bg-base-100"
            placeholder="Email"
          />
          <input
            type="text"
            className="input input-bordered w-full bg-base-100"
            placeholder="JOb"
          />
          <input
            type="text"
            className="input input-bordered w-full bg-base-100"
            placeholder="Rete"
          />
          <input
            type="password"
            className="input input-bordered w-full bg-base-100"
            placeholder="Password"
          />

          <div className="flex justify-center space-x-5 mt-4 ">
            <button
              onClick={() => setAddUser(false)}
              type="button"
              className="btn btn-outline btn-primary w-1/3"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary w-1/3">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalAddUser;
