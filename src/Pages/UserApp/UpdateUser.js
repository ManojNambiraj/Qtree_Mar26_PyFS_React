import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser() {
   const navigate = useNavigate()
   const {id} = useParams()
   
  const [usersInput, setUserInput] = useState({
    name: "",
    age: "",
    mobile: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = async () => {
    const userData = await axios.get(
      `http://localhost:8001/user/user/${id}`,
    );

    setUserInput(userData.data.data);
  }

  const handleChange = ({ target: { value, name } }) => {
    setUserInput({ ...usersInput, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postedData = await axios.put(
      `http://localhost:8001/user/update/${id}`,
      usersInput,
    );

    if(postedData){
      navigate("/")
    }
    
  };

  return (
    <div className="formParent">
      <form onSubmit={handleSubmit}>
        <h2>Update User</h2>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={usersInput.name}
            name="name"
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Age
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={usersInput.age}
            name="age"
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Mobile
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={usersInput.mobile}
            name="mobile"
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={usersInput.email}
            name="email"
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            value={usersInput.password}
            name="password"
            onChange={handleChange}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdateUser;
