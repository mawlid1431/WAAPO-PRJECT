import React from "react";
import slack from "../assets/slack.png";
import dis from "../assets/dis.png";
import pepfy from "../assets/pepfy.png";
import spofity from "../assets/spofity.png";
import webflow from "../assets/webflow.png";
import landing_image from "../assets/landing.png";

function Landing() {
 return (
  <div className="flex items-start justify-around mt-6">
   <div className="landing-content mt-20">
    <p className="w-48 py-2 rounded-full px-4 bg-gray-300">
     2886 open positions
    </p>
    <h1 className="text-6xl font-semibold my-10">
     Find your next <br /> exciting startup job
    </h1>
    <p className="">
     Lorem ipsum dolor sit amet consectetur. Orci augue eu <br /> a et
     tincidunt. Fringilla tincidunt tempor euismod <br /> porttitor quis id ame.
     <div className="mt-8">
      <div className="flex items-center gap-2 mb-4">
       <img src={slack} alt="" srcset="" />
       <img src={dis} alt="" srcset="" />
      </div>
      <div className="flex items-center gap-2">
       <img src={spofity} alt="" srcset="" />
       <img src={webflow} alt="" srcset="" />
       <img src={pepfy} alt="" srcset="" />
      </div>
     </div>
    </p>
   </div>
   <div className="landing-image py-20">
    <img src={landing_image} alt="" className="w-[32rem]" />
   </div>
  </div>
 );
}

export default Landing;
