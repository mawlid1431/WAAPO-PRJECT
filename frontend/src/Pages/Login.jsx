import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../Context/UserContext";

function Login() {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/user/login", inputData)
      .then((res) => {
        toast.success(res.data.message, {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        localStorage.setItem("token", res.data.token);
        setLoggedIn(true);
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // console.log(err.response.data);
        setInputData({ email: "", password: "" });
      });
  };
  return (
    <div>
      <div className="bg-primary p-10">
        <Link to="/" className="font-bold my-8 mx-80">
          ← Back
        </Link>
        <form className="bg-white rounded-lg shadow-lg w-[35rem] mx-auto p-10 mb-10">
          <h1 className="font-bold text-2xl mb-2 text-center">Login</h1>
          <p className="font-light text-xs my-5">
            The following is required and will be shared with opeepi
          </p>

          <div>
            <p className="font-light text-xs text-gray-400 mb-3">Email</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Email address"
              className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
              value={inputData.email}
              required
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
          </div>

          <div className="mt-5 mb-3">
            <p className="font-light mb-2 text-xs text-gray-400">Password</p>
            <input
              type="password"
              className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
              name=""
              id=""
              placeholder="Enter your password"
              value={inputData.password}
              onChange={(e) =>
                setInputData({ ...inputData, password: e.target.value })
              }
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleOnSubmit}
              className="px-10 py-3 mt-10  bg-black text-white rounded-md active:bg-gray-700"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
