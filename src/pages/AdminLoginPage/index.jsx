import { useState, useEffect } from "react";
import "./adminStyle.css";
import { Navigate, useNavigate } from "react-router-dom";

export const AdminLoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const checkCredentials = (username, password) => {
    return username === "nikolaradenovic" && password === "svjezeljeto";
  };

  useEffect(() => {
    if (localStorage.getItem("adminToken")) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    if (checkCredentials(username, password)) {
      localStorage.setItem("adminToken", "someRandomToken");
      setIsLoggedIn(true);
      window.location.reload();
    } else {
      alert("Invalid Credentials");
    }
  };

  return isLoggedIn ? (
    <Navigate to="/admin" />
  ) : (
    <div className="login-container">
      <div className="border-div">
        <h1 className="text-login">Admin Login</h1>
        <div>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="submit-block" onClick={handleLogin}>
            Login
          </button>{" "}
        </div>
      </div>
    </div>
  );
};
