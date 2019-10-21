import React from 'react'
import './style.css'

function Header () {
    return (
        <header data-aos='fade-in'>MILA
            <div id="nunc">{ `{ mee-luh }` }</div>
                <div className="teamLink">
                <a href="#team" id="team">Team </a></div>
                <div className="contactLink">
                <a href="contact" id="contact">Contact</a></div>
                <div className="loginLink">
                <a href="#login" id="login">Login</a></div>
        </header>
    )
}

// function doStuff(str) {
//     return str
// }

export default Header