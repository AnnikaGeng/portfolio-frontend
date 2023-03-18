import React from 'react'
import './Header.scss'
import {AiTwotoneCheckCircle} from "react-icons/ai"


const Header = () => {
  return (
    <header className='header'>
        <nav>
            <ul className='home-links'>
                <li>
                    <AiTwotoneCheckCircle size={10} className='dot' />
                    <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/yi-geng-5167b1232/'>LinkedIn</a>
                </li>
                <li>
                    <AiTwotoneCheckCircle size={10} className='dot' />
                    <a target="_blank" rel="noreferrer" href='https://github.com/AnnikaGeng'>GitHub</a>
                </li>
                <li>
                    <AiTwotoneCheckCircle size={10} className='dot' />
                    <a target="_blank" rel="noreferrer" href='https://github.com/AnnikaGeng'>Resume</a>
                </li>
                <li>
                    <AiTwotoneCheckCircle size={10} className='dot' />
                    <a target="_blank" rel="noreferrer" href='https://github.com/AnnikaGeng'>Contact</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header