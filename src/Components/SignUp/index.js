import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import CoursesContext from "../../Context/CoursesContext";
import "./index.css";

const SignUp = () => {
  const { registeredStudents, setRegisteredStudents } =
    useContext(CoursesContext);
  const [username, changeUsername] = useState("");
  const [password, changePassword] = useState("");
  const [email, changeEmail] = useState("");

  const onChangeUsername = (event) => changeUsername(event.target.value);
  const onChangePassword = (event) => changePassword(event.target.value);
  const onChangeEmail = (event) => changeEmail(event.target.value);

  const submitBtn = (event) => {
    event.preventDefault();
    const userDetails = {
      username,
      email,
      password,
    };
    const checkUser = registeredStudents.find(
      (item) =>
        item.username === userDetails.username &&
        item.email === userDetails.email &&
        item.password === userDetails.password
    );
    if (!checkUser) {
      setRegisteredStudents([...registeredStudents, userDetails]);
      alert("Registered Successful");
    } else {
      alert("User already exists!");
    }
    changeUsername("");
    changeEmail("");
    changePassword("");
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
          type="text"
          value={email}
          placeholder="EMAIL"
          onChange={onChangeEmail}
          className="email"
          id="email"
        />
        <input
          type="password"
          id="password"
          value={password}
          placeholder="PASSWORD"
          onChange={onChangePassword}
          className="password"
        />
        <button className="btn btn-dark mt-3 mb-3 w-50" type="submit">
          Sign Up
        </button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
