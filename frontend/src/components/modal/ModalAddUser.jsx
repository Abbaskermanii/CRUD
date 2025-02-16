import { useEffect, useState } from "react";
import axios from "axios";
/* eslint-disable react/prop-types */

function ModalAddUser({ addUser, setAddUser }) {
  const [submite, setsubmite] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [rate, setRate] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (submite == true) {
      const url = import.meta.env.VITE_BASE_URL;
      axios
        .post(`${url}/users`, {
          username,
          email,
          job,
          rate,
          password,
        })
        .then((res) => {
          console.log(res);
          setAddUser(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [submite]);

  if (!addUser) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setsubmite(true);
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
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="input input-bordered w-full bg-base-100"
            placeholder="Username"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="input input-bordered w-full bg-base-100"
            placeholder="Email"
          />
          <input
            onChange={(e) => setJob(e.target.value)}
            type="text"
            className="input input-bordered w-full bg-base-100"
            placeholder="Job"
          />
          <input
            onChange={(e) => setRate(e.target.value)}
            type="text"
            className="input input-bordered w-full bg-base-100"
            placeholder="Rete"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
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
            <button
              onClick={(e) => handleSubmit(e)}
              type="submit"
              className="btn btn-primary w-1/3"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalAddUser;
