import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <header id='navbar-master'>
        <section id='navbar-header'>
          <h1>TESTING PLAYGROUND</h1>
        </section>
        <section id='nav-list'>
            <ul>
                <a href='/'><li>DataDash</li></a>
                <a href='/class_example'><li>Class Counter</li></a>
                <a href='/hooks_example'><li>Hooks Counter</li></a>
            </ul>
        </section>
    </header>
    )
}

export default Navbar
