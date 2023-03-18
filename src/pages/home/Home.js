import React from 'react'
import './home.scss'
import code2 from '../../assets/product.png'
import Navigator from '../../conponents/navigator/Navigator'
import avatar from '../../assets/Avatar.png'
import Skillset from '../skillset/Skillset'
import Projects from '../project/Projects'

const Home = () => {
  return (
    <div className='home_page'>
        <Navigator />
        <header className='header'>
            <nav>
                <ul className='home-links'>
                    <li>
                        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/yi-geng-5167b1232/'>LinkedIn</a>
                    </li>
                    <li>                       
                        <a target="_blank" rel="noreferrer" href='https://github.com/AnnikaGeng'>GitHub</a>
                    </li>
                    <li>                       
                        <a target="_blank" rel="noreferrer" href='https://github.com/AnnikaGeng'>Resume</a>
                    </li>
                    <li>                     
                        <a target="_blank" rel="noreferrer" href='https://github.com/AnnikaGeng'>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
        <section className='container'>
          <img className='code2' src={code2} alt="code2" />
          <div className='name-intro'>
            {/* name and brush */}
            <h1>Yi <span className='myName'>Geng</span> - Full Stack Developer</h1>
            {/* detail introduction and bar */}
            <div className='introduction'>
              <img className='avatar' src={avatar} alt='my avatar' />
              <p ><span className='tag'>&lt;H1 &gt;</span>
              Hi! <br/>
              My name is Yi Geng, <br />
              I'm a Junior full stack developer,<br/>
              based in Europe, <br />
              passionate about programming, looking for a job right now.<br/>
              <span className='tag'>&lt;/H1&gt;</span></p>
            </div>
          </div>

        </section>
        
        <Skillset />
        <Projects />
    </div>
  )
}

export default Home