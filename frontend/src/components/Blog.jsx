import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import BlogDesc from "./BlogDesc";

function Blog() {
  const { id } = useParams();
  const [allComments, setAllComments] = useState([]);
  // const [commentX, setCommentX] = useState({});
  const [blog, setBlog] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8000/comment/${id}`)
      .then((res) => {
        setAllComments(res.data.message);
      })
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/blog/${id}`)
      .then((res) => {
        setBlog(res.data.message);
      })
      .catch((err) => console.log(err));
  });
  console.log(blog);
  return (
    <div>
      <Link to="/" className="font-bold my-8 mx-80">
        ← Back
      </Link>
      <div className="flex items-start justify-around mx-48 mt-24 gap-3">
        {blog.user && allComments[0].user ? (
          <BlogDesc blog={blog} allComments={allComments} />
        ) : (
          "Loading"
        )}
      </div>
    </div>
  );
}

export default Blog;
