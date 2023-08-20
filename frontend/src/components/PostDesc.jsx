import React from "react";
import { FaCalendarWeek, FaSignal, FaComputerMouse } from "react-icons/fa6";

function PostDesc({ post }) {
  return (
    <div>
      <div className="border-2 border-black p-16">
        <h1 className="font-bold text-2xl">{post.title}</h1>
        <div className="flex gap-5 mx-2 mt-5">
          <div className="flex items-center gap-2">
            <FaCalendarWeek />
            <p className="font-light">Full-time</p>
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
        <a href={post.link} target="_blank">
          <button className="px-10 py-3 my-10 bg-black text-white rounded-md">
            Apply Job
          </button>
        </a>

        <hr class="border-b border-0 border-[#EDED] my-5 " />
        <div>
          <h1 className="font-medium text-sm">Overview</h1>
          <div className="w-[30rem] mt-2 text-start">
            <p className="font-light text-xs">{post.description}</p>
          </div>
        </div>
        {/* <button className="px-8 py-2 mt-10 bg-black text-white rounded-md">
          Apply Job
        </button> */}
      </div>
    </div>
  );
}

export default PostDesc;
