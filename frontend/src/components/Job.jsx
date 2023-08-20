import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import Filter from "./Filter";
import axios from "axios";
import { Link } from "react-router-dom";

function Job() {
  const [postsCount, setPostsCount] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/job/post")
      .then((res) => {
        setPostsCount(res.data.foundPosts);
        setPosts(res.data.foundPosts.slice(0, 3));
      })
      .catch((err) => {
        console.error(err);
      });
  });
  return (
    <div>
      <div className="flex mt-32 justify-around mx-32 items-start">
        <div className="">
          <h1 className="mb-5 text-center font-bold text-xl">
            Job Opportunities{" "}
            <span className="font-light text-gray-400">
              {postsCount.length}
            </span>
          </h1>
          {posts.map((post) => (
            <JobCard post={post} />
          ))}
          <p className="text-center">
            <Link to="/jobs" className="hover:text-blue-600">
              More jobs {">"}
            </Link>
          </p>
        </div>
        <div className="">
          <Filter />
        </div>
      </div>
    </div>
  );
}

export default Job;
