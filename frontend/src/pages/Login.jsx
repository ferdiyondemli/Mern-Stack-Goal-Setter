import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

function Login() {
  const [formdata, setFormData] = useState({
    password: "",
    email: "",
  });

  const { email, password } = formdata;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, isloading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset())


  }, [user, isError, isSuccess, navigate, message, dispatch]);

  const onchange = (e) => {
    setFormData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData));
  };

  if (isloading) {
    return <Spinner />;
  }

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
