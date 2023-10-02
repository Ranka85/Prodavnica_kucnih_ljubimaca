import { useState, useEffect } from "react";
import "./adminStyle.css";

export const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        // navigate to adminsettings
        <div>
          <h1>Admin Settings</h1>
          <button
            onClick={() => {
              localStorage.removeItem("adminToken");
              setIsLoggedIn(false);
            }}
          >
            Logout
          </button>
        </div>
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
      )}
    </div>
  );
};
