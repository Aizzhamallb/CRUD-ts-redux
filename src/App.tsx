import React from "react";
import MyRoutes from "./MyRoutes/MyRoutes";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
const App = () => {
  return (
    <div>
      <Navbar />
      <MyRoutes />
    </div>
  );
};

export default App;
