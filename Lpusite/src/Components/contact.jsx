import React from "react";
import "../App.css";


function Contactus() {
  return (
    <div>
        <h1>Contact Us</h1>
        <br />
        <div className="border-2 w-100 h-60 pt-5 pl-6">
        <form action="">
            <label htmlFor="">Name: </label>
            <input type="text" placeholder="Enter name" name="name" className="border-2 pl-1 rounded"/>
            <br /> <br />
            <label htmlFor="">Email: </label>
            <input type="email" placeholder="Enter email" name="email" className="border-2 pl-1"/>
            <br /> <br />
            <label htmlFor="">Mobile No: </label>
            <input type="number" placeholder="Enter mobile no" name="mobile" className="border-2 pl-1"/>
            <br /> <br />
            <button type="submit" className="border rounded-lg bg-pink-300 px-3 py-2 hover:bg-amber-300 hover:text-black cursor-alias" onClick={
                function myAlert(){
                    alert("Form Submitted Successfully!!")
                }
            }>SUBMIT</button>
            <br />
        </form>
        </div>
    </div>
    
  )
}

export default Contactus;
