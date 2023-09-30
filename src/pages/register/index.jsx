import { useState, useContext } from "react";
import { authService } from "../../service/auth";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import "./registerStyle.css";

const { registerUser } = authService;

export const RegisterPage = () => {
  const { handleUserLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    registerUser(formData)
      .then((response) => {
        handleUserLogin(response.data);
        setIsSuccess(true);
        navigate("/login");
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          setErrors(error.response.data);
          setIsError(true);
        }
      });
  };

  return (
    <div className="registration-container">
      <div className="border-div-reg">
        <h2 className="text-register">Registration Form</h2>
        <form method="post" onSubmit={handleSubmit}>
          <div className="registration-flex">
            <label htmlFor="username" className="text-reg">
              Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              style={errors.username ? { border: "3px solid red" } : {}}
            />
          </div>
          <div className="registration-flex">
            <label htmlFor="first_name" className="text-reg">
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              style={errors.first_name ? { border: "3px solid red" } : {}}
            />
          </div>

          <div className="registration-flex">
            <label htmlFor="last_name" className="text-reg">
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
              style={errors.last_name ? { border: "3px solid red" } : {}}
            />
          </div>
          <div className="registration-flex">
            <label htmlFor="email" className="text-reg">
              Email
            </label>
            <input
              type="email"
              id="email1"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={errors.email ? { border: "3px solid red" } : {}}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className="registration-flex">
            <label htmlFor="password" className="text-reg">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              style={errors.password ? { border: "3px solid red" } : {}}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <button type="submit" className="registration-submit-block">
            Register
          </button>
        </form>
        <div className="post-ad">
          {isSuccess && <p className="p-ad-suc">Registration successfully.</p>}
          {isError && <p className="p-ad-er">There was an error </p>}
        </div>
      </div>
    </div>
  );
};
