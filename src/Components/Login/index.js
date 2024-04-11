import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import CoursesContext from "../../Context/CoursesContext";
import "./index.css";
import AlertMsg from "../../AlertMsg";

const Login = () => {
  const [username, changeUsername] = useState("");
  const [password, changePassword] = useState("");
  const { registeredStudents } = useContext(CoursesContext);

  const onChangeUsername = (event) => changeUsername(event.target.value);
  const onChangePassword = (event) => changePassword(event.target.value);

  const submitBtn = (event) => {
    event.preventDefault();
    const checkUser = registeredStudents.find(
      (item) => item.username == username && item.password === password
    );
    if (checkUser) {
      alert("Login Successful!");
    } else {
      alert("Invalid username or password!");
    }
    changePassword("");
    changeUsername("");
  };

  return (
    <div className="login-page">
      <form className="login-container" onSubmit={submitBtn}>
        <input
          type="text"
          id="username"
          value={username}
          placeholder="USERNAME"
          onChange={onChangeUsername}
          className="username"
        />
        <input
          type="password"
          id="password"
          value={password}
          placeholder="PASSWORD"
          onChange={onChangePassword}
          className="password"
        />
        <button className="btn btn-dark mt-3 mb-3 w-25" type="submit">
          Login
        </button>
        <p>
          Don't have an account? <Link to="/sign-up">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
