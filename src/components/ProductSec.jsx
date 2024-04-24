import React from "react";
import skill_lab from '../images/skill lab.PNG'
import Job_portal from '../images/job portal.PNG'
import bucket from '../images/bucket.PNG'
import bucketimg2 from '../images/bucket 2.PNG'
import achivements from '../images/achivements.PNG'

function ProductSec() {
  return (
    <>
      <div
        class="h-auto w-100 flex flex-wrap flex-col 
    items-center text-center "
      >
        <div class="w-100  flex flex-wrap flex-col items-center ">
          <p class="text-indigo-800 font-bold text-xl md:text-4xl">
            Our Products
          </p>
          <div class="w-36 border-b-4 border-yellow-400 mt-2 rounded-sm mb-10 "></div>
        </div>
        <div class="w-full h-auto flex flex-wrap justify-around">
          <div class="w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2">
            <img src={skill_lab} alt="" />
            <p class="text-2xl font-bold text-white">PW Skills Lab</p>
            <p class="text-xl font-bold text-gray-500">
              SuperCharge your Project Developement with our roubust lab.
            </p>
          </div>
          <div class="w-64 flex flex-col items-center mb-12 p-2">
            <img src={Job_portal} alt="" />
            <p class="text-2xl font-bold text-white">Job Portal</p>
            <p class="text-xl font-bold text-gray-500">
              Use exceptional templates for a stand-out resume minus the sign up
              process..
            </p>
          </div>
          <div class="w-64 flex flex-col items-center mb-12 p-2">
            <img src={bucket} alt="" />
            <p class="text-2xl font-bold text-white">Experience portalk</p>
            <p class="text-xl font-bold text-gray-500">
              PW Skills's self-paced experience portal prioritises hands-on
              training with 570+ internship projects.
            </p>
          </div>
          <div class="w-64 flex flex-col items-center mb-12 p-2">
            <img src={bucketimg2} alt="" />
            <p class="text-2xl font-bold text-white">A affiliate</p>
            <p class="text-xl font-bold text-gray-500">
              Explore affiliate marketing opportunities with PW Skills and
              attain financial freedom.
            </p>
          </div>
          <div class="w-64 flex flex-col items-center mb-12 p-2">
            <img src={achivements} alt="" />
            <p class="text-2xl font-bold text-white">
              Our student placements and
            </p>
            <p class="text-xl font-bold text-gray-500">
              100K+ career transitions speak volumes about our courses.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSec;
