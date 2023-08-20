import React, { useState } from "react";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { toast } from "react-toastify";

function BlogCreate() {
  const [blog, setBlog] = useState({});

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const tokenDecoded = jwtDecode(token);
    const user = tokenDecoded.id;
    const updatedBlog = {
      ...blog,
      user: user,
    };
    const formData = new FormData();
    formData.append("title", blog.title);
    formData.append("description", blog.description);
    formData.append("category", blog.category);
    formData.append("image", blog.image);
    formData.append("user", updatedBlog.user);

    // we cannot console log the formData so i got this alternative
    // for (let [key, value] of formData.entries()) {
    //   console.log(key + ": " + value);
    // }

    axios
      .post("http://localhost:8000/blog/create", formData)
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
        toast.error(e.response.data.message, {
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
    <div className="bg-primary p-5">
      <Link to="/" className="font-bold my-8 mx-80">
        ← Back
      </Link>
      <form className="bg-white rounded-lg shadow-lg w-[35rem] mx-auto p-10">
        <h1 className="font-bold text-2xl mb-2">Write Blog</h1>
        {/* <p className="font-light text-xs">
          The following is required and will be shared with opeepi
        </p> */}
        <div className="mt-5 mb-3">
          <p className="font-light mb-2 text-xs text-gray-400">Title</p>
          <input
            // value={blog.title}
            type="text"
            className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
            name="title"
            // id=""
            placeholder="Enter blog title here..."
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          />
        </div>
        <div className="mt-5 mb-3">
          <div>
            <p className="font-light text-xs text-gray-400 mb-3">
              Job Description
            </p>
            <textarea
              type="text"
              name="description"
              // value={blog.description}
              id=""
              placeholder="Enter blog description here..."
              className="w-full p-1.5 rounded-md bg-[#f6f6f6] h-64"
              onChange={(e) =>
                setBlog({ ...blog, description: e.target.value })
              }
            ></textarea>
          </div>
          <div>
            <p className="font-light text-xs text-gray-400 mb-3">Category</p>
            <select
              name="category"
              // value={blog.category}
              className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
              onChange={(e) => setBlog({ ...blog, category: e.target.value })}
            >
              <option value="" disabled selected>
                Select category
              </option>
              <option
                value={"Business"}
                className="w-56 p-1.5 rounded-md bg-[#f6f6f6]"
              >
                Business
              </option>
              <option
                value={"Technology"}
                className="w-56 p-1.5 rounded-md bg-[#f6f6f6]"
              >
                Technology
              </option>
              <option
                value={"Health"}
                className="w-56 p-1.5 rounded-md bg-[#f6f6f6]"
              >
                Health
              </option>
              <option
                value={"Politics"}
                className="w-56 p-1.5 rounded-md bg-[#f6f6f6]"
              >
                Politics
              </option>
            </select>
          </div>
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
                onChange={(e) => setBlog({ ...blog, image: e.target.files[0] })}
              />
            </label>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="px-10 py-3 mt-10  bg-black text-white rounded-md"
            onClick={handleOnSubmit}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default BlogCreate;
