import React from 'react'
import '../styles/Navbar.css'

function Navbar() {
    return (
        <div className="nav-container">
            <div>
            <p>Navbar</p>
            </div>
            
            <div>
            <input type="text" ></input>
            </div>
            <div className="r-nav"> 
            <button>Become a Host</button>
            <span>Language</span>
            <span>Profile/Home</span>
            </div>
            
        </div>
    )
}

export default Navbar
