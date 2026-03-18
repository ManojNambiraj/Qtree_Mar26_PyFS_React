import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const userData = await axios.get(
      `https://69b2d2eee06ef68ddd96647d.mockapi.io/employee`,
    );

    setUsers(userData.data);
  };

  const handleDelete = async (id) => {
    const deletedData = await axios.delete(`https://69b2d2eee06ef68ddd96647d.mockapi.io/employee/${id}`)

    if(deletedData){
      getData();
    }
    
  };

  return (
    <div>
      <Link to={"/create"} className="btn btn-primary m-4">
        Create user
      </Link>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Mobile</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.mobile}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>
                  <Link
                    to={`/edit/${item.id}`}
                    className="btn btn-sm btn-warning"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;
