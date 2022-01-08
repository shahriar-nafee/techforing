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
import HomePage from "./pages/components/HomePage";
import JobList from "./pages/components/JobList";
import Mail from "./pages/components/Mail";
import PrivateRoute from "./pages/components/PrivateRoute";
import User from "./pages/components/User";
import JobView from "./pages/components/JobView";

function Main() {
  const { token } = useSelector((state) => state.auth);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="portal"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        >
          <Route path="home" element={<HomePage />} />
          <Route path="jobs" element={<JobList />} />
          <Route path="jobs/:id" element={<JobView />} />
          <Route path="users" element={<User />} />
          <Route path="mails" element={<Mail />} />
        </Route>
        <Route
          path="*"
          element={<Navigate to={token ? "portal/jobs" : "/"} />}
        />
      </Routes>
    </Router>
  );
}

export default Main;
