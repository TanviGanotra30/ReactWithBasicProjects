import React from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import "./App.css";

//IN ORDER TO use ROUTER command npm i react-router-dom

function App() {
  return (
    <div>
      <BrowserRouter>
      <h1 className="bg-amber-200 text-black">LOVELY PROFESSIONAL UNIVERSITY</h1>
      <div className="flex fixed text-white top-0 ml-38 bg-amber-100  items-center shadow-md gap-5 w-full">
      <Link to="/" className="text-white"> HOME</Link>
      <Link to="/courses" className="text-white"> COURSES</Link>
      <Link to="/about" className="text-white"> ABOUT</Link>
      <Link to="/contact" className="text-white"> CONTACT</Link>
      <Link to="/lpu/btech/feedback" className="text-white"> LPU BTECH FEEDBACK</Link></div>
      
      <Routes>
        <Route path="/" element={<h1>Welcome To LPU</h1>}/>
        {/* Home route */}
        <Route path="/courses" element={<h1>Courses Offered:</h1>}/>
        <Route path="/about" element={<h1>About Lpu</h1>}/>
        <Route path="/contact" element={<h1>Contact us:</h1>}/>
        <Route path="/lpu/btech/feedback" element={<h1>Feedback regarding LPU</h1>}/>        
        <Route path="/*" element="404 Page not Found"/>             
        {/* Wildcard route for 404 page */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App