import React  from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
//BrowerRouter is used to enable routing in the app
function App(){
   const path="https://www.cloudns.net/blog/wp-content/uploads/2023/10/Error-404-Page-Not-Found.png";
  return(
    <div>
      <BrowserRouter>
      <div className="bg-pink-300 flex fixed top-0 items-center gap-5 "><Link to="/">HOME</Link>
      <Link to="/about"> ABOUT</Link>
      <Link to="/contact"> CONTACT US</Link>
      <Link to="/courses"> COURSES OFFERED</Link></div>
      <br />
      <h1 className="bg-amber-300 text-black text-bold">LOVELY PROFESSIONAL UNIVERSITY</h1>
      
      <br />
      <Routes>
        <Route path="/" element="Welcome To Lpu"/>
        <Route  path="/about" element="About Lpu"/>
        <Route  path="/contact" element="Contact us"/>
        <Route  path="/*" element={<img src={path}/>}/>
       
      </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App;