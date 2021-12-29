import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function Main() {
  const { token } = useSelector((state) => state.auth);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to={token ? "/home" : "/"} />} />
      </Routes>
    </Router>
  );
}

export default Main;
