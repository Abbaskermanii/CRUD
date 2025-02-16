import { useEffect, useState } from "react";
import ModalDelete from "./modal/ModalDelete";
import ModalUpdate from "./modal/ModalUpdate";
import axios from "axios";

function TableList() {
  const [remove, setRemove] = useState(false);
  const [update, setUpdate] = useState(false);
  const [user, setUser] = useState(null);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const url = import.meta.env.VITE_BASE_URL;
    axios
      .get(`${url}/users`)
      .then((res) => {
        console.log(res);
        setClients(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const removeHandeler = (client) => {
    setUser(client);
    setRemove(true);
  };

  const updateHandeler = (client) => {
    setUser(client);
    setUpdate(true);
  };

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>email</th>
            <th>Job</th>
            <th>rete</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody className="hover">
          {clients.map((client) => (
            <tr key={client.id}>
              <th>{client.id}</th>
              <td>{client.username}</td>
              <td>{client.email}</td>
              <td>{client.job}</td>
              <td>{client.rate}</td>
              <td>
                <button
                  className={`btn rounded-full w-20  ${
                    client.isactive ? `btn-primary` : ` btn-outline btn-primary`
                  }`}
                >
                  {client.isactive ? "active" : "inavtive"}
                </button>
              </td>
              <td>
                <button
                  onClick={() => updateHandeler(client)}
                  className="btn btn-secondary"
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  onClick={() => removeHandeler(client)}
                  className="btn btn-accent"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalDelete remove={remove} setRemove={setRemove} user={user} />
      <ModalUpdate update={update} setUpdate={setUpdate} user={user} />
    </div>
  );
}

export default TableList;
