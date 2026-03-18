import React, { useState } from "react";
import "./CreateUser.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {

  const navigate = useNavigate()

  const [usersInput, setUserInput] = useState({
    name: "",
    age: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setUserInput({ ...usersInput, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postedData = await axios.post(
      `https://69b2d2eee06ef68ddd96647d.mockapi.io/employee`,
      usersInput,
    );

    if(postedData){
      navigate("/")
    }
    
  };

  return (
    <div className="formParent">
      <form onSubmit={handleSubmit}>
        <h2>User Register</h2>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
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

export default CreateUser;
