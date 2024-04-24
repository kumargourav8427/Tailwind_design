import React from "react";
import book from '../images/book.PNG' 
import student from '../images/student.PNG' 
import tenth from '../images/tenth.PNG' 

function StudentSec() {
  return (
    <>
      <div
        class="h-auto w-100 flex flex-wrap flex-col 
    items-center text-center "
      >
        <div class="w-100  flex flex-wrap flex-col items-center ">
          <p class="text-indigo-800 font-bold text-xl md:text-4xl">
            "Pure HardWorks, No Shortcut!"
          </p>
          <div class="w-36 border-b-4 border-yellow-400 mt-2 rounded-sm mb-10"></div>
        </div>
        <div class="w-full flex flex-wrap justify-around">
          <div class="w-46 items-center  flex flex-col mb-10">
            <img class="w-40 h-40" src={book} alt="" />
            <p class="text-3xl text-white font-bold">600+</p>
            <p class="text-3xl text-gray-500 font-bold">Diffrent Courses</p>
          </div>

          <div class="w-46 items-center  flex flex-col mb-10">
            <img class="w-40 h-40" src={student} alt="" />
            <p class="text-3xl text-white font-bold">700,000+</p>
            <p class="text-3xl text-gray-500 font-bold">Students Enrolled</p>
          </div>

          <div class="w-46 items-center flex flex-col mb-10">
            <img class="w-40 h-40" src={tenth} alt="" />
            <p class="text-3xl text-white font-bold">10,000+</p>
            <p class="text-3xl text-gray-500 font-bold">
              Sucessfull Transition
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentSec;
