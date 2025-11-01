import React from "react";
import "./App.css";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
export const name="Tanvi";
import About from "./about";

const info={
  name:"Kavya",
  roll_number:63,
  course:"B.com"
}
const arr=["HTML","CSS","React"]


function operation(a,b,op){
  if(op==="add"){
    return a+b;
  }
  else if(op==="subtract") return a-b;
  else{
    return "Invalid opeartion";
  }
}


function App(){
  return(
    <>
      <h1>Hi {name} how are you??</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </BrowserRouter>
      <p>Name is {info.name}</p>
      <p>Roll number is {info.roll_number}</p>
      <p>Course is {info.course}</p>

      <ul>
        <li>{arr[0]}</li>
        <li>{arr[1]}</li>
        <li>{arr[2]}</li>
      </ul>
    </>
  )
}

export default App;