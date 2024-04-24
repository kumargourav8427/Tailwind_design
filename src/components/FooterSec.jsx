import React from "react";
import pw_skills from '../images/pw skiils.png'
import footer_img from '../images/footer img.jpg'

function FooterSec() {
  return (
    <>
      <footer
        class="w-full bg-gray-900 px-4 text-white py-8 flex fle-col
    md:flex-row justify-between flex-wrap md:px-12"
      >
        <div class="">
          <img
            class="w-64 h-14 rounded-sm"
            src={pw_skills}
            alt=""
          />
          <p class="my-3 text-xl">Email : kumargourav8427@gmail.com</p>
          <img
            class="w-32 h-14 mx-10 rounded items-center"
            src={footer_img}
            alt=""
          />
        </div>
        <div>
          <h2 class="font-bold text-xl mt-4">PW Skill</h2>
          <div class="w-32 h-1 border-b-4 border-yellow-400 rounded my-2"></div>

          <div>
            <p>About Us</p>
            <p>FAQs</p>
            <p>Priavcy Policy</p>
          </div>
        </div>
        <div>
          <h2 class="font-bold text-xl mt-4">Products</h2>
          <div class="w-32 h-1 border-b-4 border-yellow-400 rounded my-2"></div>
          <div>
            <p>PW Skills Lab</p>
            <p>Job Portal </p>
            <p> Experience Portal </p>
            <p> Become an affiliate</p>
            <p>Hall of fame</p>
          </div>
        </div>
        <div>
          <h2 class="font-bold text-xl mt-4">Links</h2>
          <div class="w-32 h-1 border-b-4 border-yellow-400 rounded my-2"></div>

          <div>
            <p>Discord Channel</p>
            <p>PW Youtube</p>
            <p>Careers</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterSec;
