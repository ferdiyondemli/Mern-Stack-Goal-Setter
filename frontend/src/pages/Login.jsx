import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { email, password } = formdata;

  const onchange = (e) => {
    setFormData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please login and start setting goals</p>
      </section>

      <section className="heading">
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onchange}
            />
          </div>{" "}
          <div className="form-control">
            <input
              type="text"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={onchange}
            />
          </div>{" "}
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              {" "}
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
