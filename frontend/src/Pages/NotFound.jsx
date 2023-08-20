import React from "react";
import notfound from "../assets/notfound.svg";
function NotFound() {
 return (
  <div>
   <div className="flex justify-center mt-36">
    <img src={notfound} alt="" srcset="" className="w-[40rem]" />
   </div>
   <div className="text-center my-20">
    <h1 className="text-3xl font-bold">Page Not Found😞</h1>
   </div>
  </div>
 );
}

export default NotFound;
