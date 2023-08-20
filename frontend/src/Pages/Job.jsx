import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

function Job() {
  const [post, setPost] = useState({
    title: "",
    link: "",
    description: "",
    user: "",
    type: "",
    experience: "",
    location: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const tokenDecoded = jwtDecode(token);
    const user = tokenDecoded.id;
    const updatedPost = {
      ...post,
      user: user,
    };
    axios
      .post("http://localhost:8000/job/post", updatedPost)
      .then((res) =>
        toast.success(res.data.message, {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      )
      .catch((e) =>
        toast.error(res.data.message, {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      );
  };
  return (
    <div>
      <div className="bg-primary p-5">
        <Link to="/" className="font-bold  mb-20 mx-60">
          ← Back
        </Link>
        <form className="bg-white rounded-lg shadow-lg w-[35rem] mx-auto p-10">
          <h1 className="font-bold text-2xl mb-2">Post New Job</h1>
          <p className="font-light text-xs">
            The following is required and will be shared with opeepi
          </p>

          {/* Title */}
          <div className="mt-5 mb-3">
            <p className="font-light mb-2 text-xs text-gray-400">Job Title</p>
            <input
              type="text"
              className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
              name="title"
              value={post.title}
              id=""
              placeholder="Enter your job title"
              onChange={handleOnChange}
            />
          </div>

          {/* Link */}
          <div className="mt-5 mb-3">
            <p className="font-light mb-2 text-xs text-gray-400">Job Link</p>
            <input
              type="text"
              className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
              name="link"
              value={post.link}
              id=""
              placeholder="Enter your job link to apply"
              onChange={handleOnChange}
            />
          </div>

          {/* Description */}
          <div>
            <p className="font-light text-xs text-gray-400 mb-3">
              Job Description
            </p>
            <textarea
              type="text"
              name="description"
              value={post.description}
              id=""
              placeholder="Enter job description"
              className="w-full p-1.5 rounded-md bg-[#f6f6f6] h-64"
              onChange={handleOnChange}
            ></textarea>
          </div>

          {/* Job Type */}
          <div className="flex justify-between mt-5 mb-3">
            <div>
              <p className="font-light text-xs text-gray-400 mb-3">Job Type</p>
              <select
                className="w-56 p-1.5 rounded-md bg-[#f6f6f6]"
                placeholder="Enter job type"
                name="type"
                onChange={handleOnChange}
              >
                <option value={post.type} disabled selected>
                  Select your option
                </option>
                <option
                  className="w-56 p-1.5 rounded-md bg-[#f6f6f6]"
                  value={"Full-time"}
                >
                  Full-Time
                </option>
                <option
                  className="w-56 p-1.5 rounded-md bg-[#f6f6f6]"
                  value={"Part-time"}
                >
                  Part-Time
                </option>
                <option
                  className="w-56 p-1.5 rounded-md bg-[#f6f6f6]"
                  value={"Internship"}
                >
                  Internship
                </option>
              </select>

              {/* Experience */}
            </div>
            <div>
              <p className="font-light text-xs text-gray-400 mb-3">
                Experience
              </p>
              <select
                className="w-56 p-1.5 rounded-md bg-[#f6f6f6]"
                placeholder="Enter job experience"
                onChange={handleOnChange}
                name="experience"
              >
                <option value={post.experience} disabled selected>
                  Select your option
                </option>
                <option value={"Junior"}>Junior</option>
                <option value={"Senior"}>Senior</option>
                <option value={"Expert"}>Expert</option>
              </select>
            </div>
          </div>

          <div>
            <p className="font-light text-xs text-gray-400 mb-3">
              Job Location
            </p>
            <select
              type="password"
              className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
              onChange={handleOnChange}
              name="location"
            >
              <option value={post.location} disabled selected>
                Select your option
              </option>
              <option value="Onsite">Onsite</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          <div className="flex justify-center">
            <button
              className="px-10 py-3 mt-10  bg-black text-white rounded-md"
              onClick={handleOnClick}
            >
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Job;
