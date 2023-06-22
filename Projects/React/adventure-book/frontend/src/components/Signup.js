import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../css/signup.css";

const Login = () => {
  const history = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8005/signup", {
          fname,
          lname,
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exists!") {
            alert("user already exists!");
          } else if (res.data == "not exist") {
            history("/login");
          }
        })
        .catch((error) => {
          alert("wrong details!");
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="main bgs">
        <div className="bgcovers"></div>

        <div className="formLogins">
          <h1>Sign Up</h1>

          <form action="POST">
            <input
              type="text"
              name="fname"
              id=""
              onChange={(e) => {
                setFname(e.target.value);
              }}
              placeholder="Enter firstname"
              autoComplete="off"
            />
            <br />
            <input
              type="text"
              name="lname"
              id=""
              onChange={(e) => {
                setLname(e.target.value);
              }}
              placeholder="Enter lastname"
              autoComplete="off"
            />
            <br />
            <input
              type="email"
              name="email"
              id=""
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter email"
              autoComplete="off"
            />
            <br />
            <input
              type="password"
              name="password"
              id=""
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter password"
            />
            <br />
            <input type="submit" value="Sign Up" onClick={submit} />
          </form>

          <p>
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
