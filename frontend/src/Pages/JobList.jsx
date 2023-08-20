import JobCard from "../components/JobCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function JobList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/job/post")
      .then((res) => {
        setPosts(res.data.foundPosts);
      })
      .catch((err) => {
        console.error(err);
      });
  });
  return (
    <div>
      <div className="text-center text-4xl">
        Have a job??{" "}
        <Link to="/createJob" className="text-blue-600">
          Post now
        </Link>
      </div>
      <div className="flex flex-wrap gap-x-4 mx-20">
        {posts.map((post) => (
          <JobCard post={post} />
        ))}
      </div>
    </div>
  );
}
export default JobList;
