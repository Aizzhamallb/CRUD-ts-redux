import React from "react";
import { Route, Routes } from "react-router-dom";
import AddUser from "../components/AddUser/AddUser";
import EditUser from "../components/EditUser/EditUser";
import UserList from "../components/UserList/UserList";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/add" element={<AddUser />} />
      <Route path="/" element={<UserList />} />
      <Route path="/edit/:id" element={<EditUser />} />
    </Routes>
  );
};

export default MyRoutes;
