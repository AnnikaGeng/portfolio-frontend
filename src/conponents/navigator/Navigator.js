import React from 'react'
import './Navigator.scss'
import home from '../../assets/home.svg'
import person from '../../assets/person.svg'
import codeBoard from '../../assets/code-board.svg'
import terminal from '../../assets/terminal.svg'
import prompt from '../../assets/prompt.svg'


function Navigator() {
  return (
    <div className='nav-container'>
        <nav className='navBar'>
            <ul>
                <li><a href="https://github.com/AnnikaGeng"><img src={home} className='icon' alt='home icon' /></a></li>
                <li className='active'><a href="https://github.com/AnnikaGeng"><img src={person} className='icon' alt='person icon' /></a></li>
                <li><a href="https://github.com/AnnikaGeng"><img src={codeBoard} className='icon' alt='code Board icon'/></a></li>
                <li><a href="https://github.com/AnnikaGeng"><img src={terminal} className='icon' alt='terminal icon'/></a></li>
                <li><a href="https://github.com/AnnikaGeng"><img src={prompt} className='icon' alt='prompt icon'/></a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navigator