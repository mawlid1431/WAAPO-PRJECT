import React, { useEffect, useState } from "react";
import PostDesc from "./PostDesc";
import PostProfileCard from "./PostProfileCard";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Post() {
  const [post, setPost] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/job/${id}`)
      .then((res) => setPost(res.data.foundPost))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <Link to="/" className="font-bold my-8 mx-80">
        ← Back
      </Link>
      <div className="flex items-start justify-around mx-48 mt-24 gap-3">
        <div>
          <PostDesc post={post} />
        </div>
        <div>
          {post.user ? <PostProfileCard user={post.user} /> : "Loading..."}
        </div>
      </div>
    </div>
  );
}

export default Post;
