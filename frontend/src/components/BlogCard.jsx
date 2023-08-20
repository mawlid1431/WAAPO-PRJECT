import React from "react";
import mailcamp from "../assets/mailchimp.jpeg";
import { FaCalendarWeek, FaSignal, FaComputerMouse } from "react-icons/fa6";
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <div className="flex items-start justify-around mt-6">
      {!blog ? (
        "Loading..."
      ) : (
        <Link to={`singleBlog/${blog._id}`}>
          <div className="w-[290px] bg-white shadow-md hover:shadow-lg mb-4  rounded-md">
            {/* {console.log(post.user.image)} */}
            <div className="">
              <img
                src={`http://localhost:8000/${blog.image}`}
                width="100px"
                alt=""
                srcset=""
                className="w-full rounded-tr-md rounded-tl-md"
              />
            </div>
            <div className="p-4">
              <div className="">
                <p
                  style={{
                    display: "inline-block",
                    border: "2px solid",
                    borderRadius: "0.25rem",
                    paddingLeft: "0.25rem",
                    paddingRight: "0.25rem",
                    marginBottom: "6px",
                    fontWeight: "bold",
                    fontSize: "0.875rem",
                  }}
                >
                  {blog.category}
                </p>
              </div>
              <h3 className="font-bold">{blog.title}</h3>
              <div className="flex items-center pt-4">
                <img
                  className="rounded-full w-10"
                  src={`http://localhost:8000/${blog.user.image}`}
                />
                <p className="text pl-4">{blog.user.name}</p>
              </div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

export default BlogCard;
