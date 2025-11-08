import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';


import Home from "./Components/home.jsx";
import Aboutus from "./Components/aboutus.jsx";           
import Contactus from "./Components/contact.jsx";
import Courses from "./Components/courses.jsx";

export const userName="LPU USER";
function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="text-4xl bg-amber-200 text-black w-full top-0 py-5 ">
          
          <Link to="/">HOME</Link>
          <Link to="/aboutus"> | ABOUT US</Link>
          <Link to="/contact"> | CONTACT US</Link>
          <Link to="/courses"> | COURSES</Link>

          <h4> Welcome {userName}</h4>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contactus/>} />        {/*Components rendered*/}
          <Route path="/aboutus" element={<Aboutus/>} />
          <Route path="/courses" element={<Courses/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
