import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [signingUp, setSigningUp] = useState(false);
  const [image, setImage] = useState();
  const [user, setUser] = useState({
    // these keys should match you model keys
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    bio: "",
    company: "",
  });

  const handleOnChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setImage({ ...user, [name]: files[0] });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  // const handleOnChange = (e) => {
  //   const { name, value, type, file } = e.target;
  //   {
  //     type == "file"
  //       ? setUser({ ...user, [name]: files[0] })
  //       : setUser({ ...user, [name]: value });
  //   }
  // };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("confirmPassword", user.confirmPassword);
    formData.append("bio", user.bio);
    formData.append("company", user.company);
    formData.append("image", image);
    // console.log(image);
    {
      signingUp == false && setSigningUp(true);
    }
    axios
      .post("http://localhost:8000/user/signup", formData)
      .then((res) => console.log(res.data.message))
      .catch((err) => console.log(err.response.data.message))
      .finally(() => setSigningUp(false));
  };
  return (
    <div className="bg-primary p-5">
      <Link to="/" className="font-bold my-8 mx-80">
        ← Back
      </Link>
      <form className="bg-white rounded-lg shadow-lg w-[35rem] mx-auto p-10">
        <h1 className="font-bold text-2xl mb-2">Register New User</h1>
        <p className="font-light text-xs">
          The following is required and will be shared with opeepi
        </p>
        <div className="mt-5 mb-3">
          <p className="font-light mb-2 text-xs text-gray-400">Full Name</p>
          <input
            value={user.name}
            type="text"
            className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
            name="name"
            // id=""
            placeholder="Enter your full name"
            onChange={handleOnChange}
          />
        </div>

        <div>
          <p className="font-light text-xs text-gray-400 mb-3">Email</p>
          <input
            value={user.email}
            type="text"
            name="email"
            // id=""
            placeholder="Email address"
            className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
            onChange={handleOnChange}
          />
        </div>
        <div className="flex justify-between mt-5 mb-3">
          <div>
            <p className="font-light text-xs text-gray-400 mb-3">Password</p>
            <input
              value={user.password}
              type="password"
              className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
              name="password"
              // id=""
              placeholder="Enter your password"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <p className="font-light text-xs text-gray-400 mb-3">
              Confirm Password
            </p>
            <input
              value={user.confirmPassword}
              type="password"
              className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
              name="confirmPassword"
              // id=""
              placeholder="Re-Enter your password again"
              onChange={handleOnChange}
            />
          </div>
        </div>

        <div className="mt-5 mb-3">
          <p className="font-light mb-2 text-xs text-gray-400">Bio</p>
          <input
            value={user.bio}
            type="text"
            className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
            name="bio"
            // id=""
            placeholder="Write info about yourself"
            onChange={handleOnChange}
          />
        </div>

        <div className="mt-5 mb-3">
          <p className="font-light mb-2 text-xs text-gray-400">Company</p>
          <input
            value={user.company}
            type="text"
            className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
            name="company"
            // id=""
            placeholder="Enter your company name"
            onChange={handleOnChange}
          />
        </div>

        <div>
          <div class="flex items-center justify-center w-[30rem]">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 "
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                // class="hidden"
                name="image"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="px-10 py-3 mt-10  bg-black text-white rounded-md"
            onClick={handleOnSubmit}
            disabled={signingUp}
          >
            {signingUp ? "Signing up" : "Sign up"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
