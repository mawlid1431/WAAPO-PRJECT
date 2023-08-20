import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mailchimp from "../assets/mailchimp.jpeg";
import { UserContext } from "../Context/UserContext";
import axios from "axios";
import jwt_decode from "jwt-decode";

function Header() {
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  const [profile, setProfile] = useState();
  const handleOnLogOut = () => {
    setLoggedIn(false);
    localStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedUser = jwt_decode(token);
      axios
        .get(`http://localhost:8000/user/${decodedUser.id}`)
        .then((res) => setProfile(res.data.message.image))
        .catch((err) => console.log(err));
    }
  });

  return (
    <div className="flex justify-between items-center mx-32 my-5">
      <div className="logo">
        <div>
          <Link to="/" className="font-bold text-2xl">
            WP-Jobs
          </Link>
          <Link to="/jobs" className="font-bold ml-8">
            Jobs
          </Link>{" "}
          <Link to="/blogs" className="font-bold ml-1">
            Blogs
          </Link>
        </div>
      </div>
      {loggedIn == true ? (
        <div className="flex gap-5 items-center">
          <div className="mx-auto">
            <img
              src={profile != null && `http://localhost:8000/${profile}`}
              alt=""
              srcset=""
              className="w-16 rounded-full"
            />
          </div>
          <Link
            to="/"
            className="px-10 py-2 bg-black text-white rounded-md"
            onClick={handleOnLogOut}
          >
            Logout
          </Link>
        </div>
      ) : (
        <div className="flex gap-5 items-center">
          <Link to="/login">Login</Link>
          <Link
            to="/register"
            className="px-10 py-2 bg-black text-white rounded-md"
          >
            Signup
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
