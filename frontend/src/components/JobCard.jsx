import React from "react";
import mailcamp from "../assets/mailchimp.jpeg";
import { FaCalendarWeek, FaSignal, FaComputerMouse } from "react-icons/fa6";
import { Link } from "react-router-dom";

function JobCard({ post }) {
  return (
    <div className="flex items-start justify-around mt-6">
      {!post ? (
        "Loading..."
      ) : (
        <Link to={`single/${post._id}`}>
          <div className="w-[600px] bg-white shadow-md hover:shadow-lg mb-4 px-4 py-2 rounded-md">
            {/* {console.log(post.user.image)} */}
            <div className="flex items-center justify-between">
              <div className="flex gap-5 items-center mb-2">
                <div className="rounded-full">
                  <img
                    // src={
                    //   post.image
                    //     ? `http://localhost:8000/${post.user.image}`
                    //     : mailcamp
                    // }
                    src={`http://localhost:8000/${post.user.image}`}
                    width="100px"
                    alt=""
                    srcset=""
                    className="w-16 rounded-full"
                  />
                </div>
                <div>
                  <p className="font-bold">{post.title}</p>
                  <h1>{post.description.substring(0, 80)}...</h1>
                </div>
              </div>
              <div>
                <p>1d ago</p>
              </div>
            </div>
            <div className="flex gap-5 mx-2 mt-5">
              <div className="flex items-center gap-2">
                <FaCalendarWeek />
                <p>{post.type}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaSignal />
                <p>{post.experience}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaComputerMouse />
                <p>{post.location}</p>
              </div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

export default JobCard;
