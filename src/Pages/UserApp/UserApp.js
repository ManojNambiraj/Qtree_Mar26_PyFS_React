import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersList from "./UsersList";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";

function UserApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/edit/:id" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default UserApp;


// Create   Read   Update    Delete
// POST     Get    PUT       Delete  -> HTTP Methods