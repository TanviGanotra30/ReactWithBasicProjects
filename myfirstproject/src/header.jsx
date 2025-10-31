import React from 'react';
import './App.css';

function header(){
    return (
        <div className="list">
            <a href="App.jsx">Home</a>
            <a href="About.jsx">About us</a>
            <a href="Feedback.jsx">Feedback</a>
            <a href="Contact.jsx">Contact Us</a>
        </div>
    )
}

export default header;