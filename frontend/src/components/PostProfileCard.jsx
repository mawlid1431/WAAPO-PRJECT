import React from "react";
import mailcamp from "../assets/mailchimp.jpeg";

function PostProfileCard({ user }) {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg border-2 border-black px-3 py-2 rounded-lg w-[300px]">
      <img
        src={`http://localhost:8000/${user.image}`}
        alt=""
        className="w-16 rounded-full"
      />
      <p className="text-gray-300 font-light">Job By</p>
      <h1 className="font-bold my-3">{user.name} ↗</h1>
      <p className="text-8 font-light">{user.bio}</p>
    </div>
  );
}

export default PostProfileCard;
