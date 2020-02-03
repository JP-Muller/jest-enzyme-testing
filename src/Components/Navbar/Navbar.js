import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <header id='navbar-master'>
        <section id='navbar-header'>
          Counter Playground
        </section>
        <section id='nav-list'>
            <ul>
                <a href='/'><li>Class Counter</li></a>
                <a href='/hooks_example'><li>Hooks Counter</li></a>
                {/* <li>News & Events</li>
                <li>Contact</li>
                <li><a href='#/login'><i className="fas fa-user" />Client Portal</a></li> */}
            </ul>
        </section>
    </header>
    )
}

export default Navbar
