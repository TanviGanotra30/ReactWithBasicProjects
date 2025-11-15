import { useState } from "react";
import './App.css';
import Contactus from "./Components/contact";
//Counter change on click of btn

// const[lightmode,setDarkmode]=useState(true);

export default function Hooks(){
    const[counter,setCounter]=useState(1);
    const[display,setDisplay]=useState(true);
    return(
        
        <div>
            <h1>Counter value is {counter}</h1>
            <button onClick={()=>setCounter(counter+1)}>Increment </button>
             <button onClick={()=>setCounter(counter-1)}>Decrement </button>
            <button onClick={()=>setCounter(0)}>Reset</button>
            {
                display? <Contactus/> :null
            }
            {
        display 
        ? (
            <p onClick={() => setDisplay(false)}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus magnam deserunt ad et quibusdam illum nihil
              blanditiis. Corrupti, sequi?
            </p>
          )
        : null
      }
      {
        display
          ? <button onClick={() => setDisplay(false)}>Hide the Paragraph</button>
          : <button onClick={() => setDisplay(true)}>Show the Paragraph</button>
      }
</div>
    
    )
}