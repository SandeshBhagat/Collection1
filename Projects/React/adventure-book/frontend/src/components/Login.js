import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../css/login.css";

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8005/login", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exists!") {
            history("/welcome");
          } else if (res.data == "not exist") {
            alert("user not signed in!");
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
      <div className="main bg">
        <div className="bgcover"></div>

        <div className="formLogin">
          <h1>Sign in</h1>

          <form action="POST">
            <input
              type="email"
              name="email"
              id=""
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter email.."
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
              placeholder="Enter password.."
            />
            <br />
            <input type="submit" value="Sign in" onClick={submit} />
          </form>

          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
