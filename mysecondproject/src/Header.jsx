import React from 'react'

function Header() {
  return (
    <div class="w-full p-4 flex justify-center gap-5 text-shadow-amber-100">
        <a href="./App.jsx" class="text-2xl pr-8 bg-white pl-7 rounded-lg">Home</a>
        <a href="./Aboutus.jsx" class="text-2xl pr-8 bg-white pl-7 rounded-lg">About us</a>
        <a href="./Contactus.jsx"class="text-2xl pr-8 bg-white rounded-lg pl-7">Contact us</a>
        <a href="./Feedback.jsx" class="text-2xl pr-8 bg-white rounded-lg pl-7">Feedback</a>
    </div>
  )
}

export default Header;

//rfce 