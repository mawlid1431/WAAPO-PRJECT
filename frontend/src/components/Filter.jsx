import React from "react";

function Filter() {
 return (
  <div>
   <div>
    <h1 className="font-bold text-xl mb-3">Filters</h1>
    <div className="mb-5">
     <h1 className="font-bold mb-2">Roles</h1>
     <div className="font-light">
      <p>Front-end developer (28)</p>
      <p className="my-2">Back-end developer (32)</p>
      <p>Data Sceince</p>
      <p className="my-2">UI Designer (56)</p>
      <p>CyberSecurity(43)</p>
     </div>
    </div>
   </div>
   <div className="mb-5">
    <h1 className="font-bold mb-2">Seniority Level</h1>
    <div className="font-light">
     <p>Junior</p>
     <p className="my-2">Mid-Level</p>
     <p>Senior</p>
     <p className="mt-2">Exper and Leadership</p>
    </div>
   </div>
   <div className="mb-5">
    <h1 className="font-bold mb-2">Job Type</h1>
    <div className="font-light">
     <p>Full-time</p>
     <p className="my-2">Freelance/Contract</p>
     <p>Internship</p>
     <p className="my-2">Senior</p>
     <p>Part-time</p>
    </div>
   </div>
  </div>
 );
}

export default Filter;
