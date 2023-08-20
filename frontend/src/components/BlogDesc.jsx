import axios from "axios";
import jwtDecode from "jwt-decode";
import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
// import mailchimp from "../assets/mailchimp";
import { FaCalendarWeek, FaSignal, FaComputerMouse } from "react-icons/fa6";
import { useParams } from "react-router-dom";

function BlogDesc({ blog, allComments }) {
  // console.log(blog);
  // console.log(allComments);

  const [profile, setProfile] = useState();
  const [comment, setComment] = useState({ body: "" });

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
  const handlOnClick = () => {
    const token = localStorage.getItem("token");
    const tokenDecoded = jwtDecode(token);
    const user = tokenDecoded.id;
    if (comment.body != "") {
      const updatedComment = {
        ...comment,
        blog: "64d72947dc0d61be56623ce3",
        user: user,
      };
      axios
        .post("http://localhost:8000/comment/", updatedComment)
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
        )
        .finally(() => setComment({ body: "" }));
    } else {
      toast.error("Type your comment");
    }
  };

  const sortedComments = allComments.slice().sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB - dateA;
  });

  const token = localStorage.getItem("token");
  return (
    <div>
      <div className="pb-8 px-36">
        <div className="text-4xl">{blog.title}</div>
        <br />
        <h1 className="font-bold text-2xl"></h1>
        <img className="w-full" src={`http://localhost:8000/${blog.image}`} />

        <hr class="border-b border-0 border-[#EDED] my-5 " />
        <div>
          {/* <h1 className="font-medium text-sm">{blog.title}</h1> */}
          <div className="w-fulll mt-2 text-start">
            <p className="font-light text">{blog.description}</p>
          </div>
          <p className="font-semibold border-t-2 mt-2 pt-4">Author</p>
          <div className="flex items-center pt-4 align-bottom">
            <img
              className="rounded-full w-10 "
              src={`http://localhost:8000/${blog.user.image}`}
            />
            <p className="text pl-4">{blog.user.name}</p>
          </div>
        </div>

        <p className="font-semibold text-2xl border-b-2 my-4 pt-4">Comments</p>
        {token ? (
          <div className="flex pt-4 items-start">
            <div className="w-12">
              <img
                className="rounded-full "
                src={profile != null && `http://localhost:8000/${profile}`}
              />
            </div>
            <div className="flex items-end flex-col">
              <div className="pl-4">
                <textarea
                  type="text"
                  value={comment.body}
                  className="border-solid border-2 rounded w-[700px]  p-3"
                  placeholder="Type your comment here"
                  onChange={(e) =>
                    setComment({ ...comment, body: e.target.value })
                  }
                />
              </div>
              <div className="flex gap-2 content-end mt-2">
                <button>Cancel</button>
                <button
                  className="px-4 py-2 text-white bg-black rounded"
                  onClick={handlOnClick}
                >
                  Publish
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {sortedComments.map((commentX) => (
          <div className="flex pt-4 items-start">
            <div className="w-12">
              <img
                className="rounded-full "
                src={`http://localhost:8000/${commentX.user.image}`}
              />
            </div>
            <div className="flex items-end flex-col">
              <div className="ml-4 bg-[#e5e7eb] rounded">
                <p className="border-solid border-2 rounded w-[700px]  p-3">
                  {commentX.body}
                </p>
              </div>
              <div className="flex gap-2 content-end mt-2"></div>
            </div>
          </div>
        ))}

        <div></div>
        {/* <button className="px-8 py-2 mt-10 bg-black text-white rounded-md">
          Apply Job
        </button> */}
      </div>
    </div>
  );
}

export default BlogDesc;
