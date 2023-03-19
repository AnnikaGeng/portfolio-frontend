// import React, { useState, useEffect, useRef }  from 'react'
import './Navigator.scss'
import home from '../../assets/home.svg'
import person from '../../assets/person.svg'
import codeBoard from '../../assets/code-board.svg'
import terminal from '../../assets/terminal.svg'
import prompt from '../../assets/prompt.svg'
import {HashLink as Link} from 'react-router-hash-link'


function Navigator({activeSection}) {
    

  return (
    <div className='nav-container'>
        <nav className='navBar'>
            <ul>
                <li><img src={home} className='icon' alt='home icon' /></li>
                <li className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>
                    <Link to='#home' smooth={true}><img src={person} className='icon' alt='person icon' /></Link>
                </li>

                <li className={`nav-link ${activeSection === 'skillset' ? 'active' : ''}`}>
                    <Link to='#skillset' smooth={true}><img src={codeBoard} className='icon' alt='code Board icon'/></Link>
                </li>

                <li className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>
                    <Link to='#projects' smooth={true}><img src={terminal} className='icon' alt='terminal icon'/></Link>
                </li>
                <li ><a href="https://github.com/AnnikaGeng"><img src={prompt} className='icon' alt='prompt icon'/></a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navigator