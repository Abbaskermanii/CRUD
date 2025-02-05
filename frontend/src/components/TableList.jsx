import React, { useState } from "react";
import ModalFrom from "./ModalDelte";

function TableList() {
  const clients = [
    {
      id: 1,
      name: "jalal zolfonon",
      email: "jalal-zoli@gmail.com",
      job: "musician",
      rete: "100",
      isactive: true,
    },
    {
      id: 2,
      name: "shaeram nazeri",
      email: "shahram@gmail.com",
      job: "singer",
      rete: "100",
      isactive: true,
    },
    {
      id: 3,
      name: "hosein alizadeh",
      email: "alizadeh@gmail.com",
      job: "musician",
      rete: "90",
      isactive: false,
    },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table">
        {/* head */}
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
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.job}</td>
              <td>{client.rete}</td>
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
                <button className="btn btn-secondary">Update</button>
              </td>
              <td>
                <button className="btn btn-accent">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableList;
