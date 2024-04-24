import React from 'react'

function NavBar() {
  return (
    <div>
    <nav class='w-full h-14 bg-indigo-200 flex justify-between px-4 
    items-center'>
        <div class="text-2xl text-indigo-800 font-bold">
            PW Skills
        </div>
        <ul class="md:flex space-x-4 font-semibold hidden">
            <li class="cursor-pointer">Home</li>
            <li class="cursor-pointer">About Us</li>
            <li class="cursor-pointer">Contact Us</li>
        </ul>
        <div class="hidden md:block p-2 bg-indigo-700 text-white rounded font-bold cursor-pointer">Login/SignUp</div>
        <div class="md:hidden">
            <a href="#" class="text-4xl font-bold">&#8801;</a>
        </div>
    </nav>

    </div>
  )
}

export default NavBar