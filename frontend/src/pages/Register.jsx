import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
 

function Register() {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formdata;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, isloading, message } = useSelector(
    (state) => state.auth
  );


useEffect(()=>{
if(isError){toast.error("Passwords do not match");}
if(isSuccess||user){navigate("/");}
dispatch(reset())
},[user, isError, isSuccess, navigate, message, dispatch])



  const onchange = (e) => {
    setFormData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = { name, email, password };
      dispatch(register(userData))
    }

  };

  if(isloading){return(<Spinner />)}

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="heading">
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={onchange}
            />
          </div>{" "}
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
          <div className="form-control">
            <input
              type="text"
              className="form-control"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Confim Password"
              onChange={onchange}
            />
          </div>
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

export default Register;
