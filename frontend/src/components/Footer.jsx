import React from "react";

function Footer() {
  return (
    <div className="bg-secondary text-white rounded-lg">
      <div className="text-center p-20">
        <h1 className="text-3xl font-bold">
          Explore a <br /> Job Now! ✨
        </h1>
        <p className="font-light text-gray-500 my-5">
          WP-Jobs is the platform, startups can get assistance with their
          recruitment <br /> of talent as well as connection with investors.
        </p>
        <button className="px-10 py-3 bg-white text-black rounded-md">
          Explore Jobs
        </button>
      </div>
      <hr className="border-b border-0 border-terinary mb-10 mx-10" />
      <div className="flex justify-between mx-10 pb-10">
        <div className="flex items-center gap-10">
          <p className="text-gray-700 text-12 ">
            ©2023 WP-Jobs. All right reserved
          </p>
          <ul className="flex items-center gap-5 text-gray-600">
            <li>About</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Tools</li>
            <li>Blog</li>
            <li>Patners</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex items-center gap-3 text-gray-600">
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
