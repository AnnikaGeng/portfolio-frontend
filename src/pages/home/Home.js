import React from 'react'
import { useRef, useEffect, useState } from 'react'
import './home.scss'
import Navigator from '../../conponents/navigator/Navigator'
// import avatar from '../../assets/Avatar.png'
import Skillset from '../skillset/Skillset'
import Projects from '../project/Projects'
import Contact from '../contact/Contact'



const Home = () => {

    const [activeSection, setActiveSection] = useState(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
            });
        },
        { threshold: 0.5 }
        );

        sectionsRef.current.forEach((section) => {
        observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);
  
  return (
    <div className='home_page'>
        <Navigator activeSection={activeSection}/>
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
        <section className='container' id='home' ref={(el) => (sectionsRef.current[0] = el)}>
          <img className='code2' src="https://res.cloudinary.com/drk3j2xi8/image/upload/v1679255268/product_l1fsn8.png" alt="code2" />
          <div className='name-intro'>
            {/* name and brush */}
            <h1>Yi <span className='myName'>Geng</span> - Full Stack Developer</h1>
            {/* detail introduction and bar */}
            <div className='introduction'>
              <img className='avatar' src="https://res.cloudinary.com/drk3j2xi8/image/upload/v1679255266/Avatar_wqoo1n.png" alt='my avatar' />
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
        
        <Skillset sectionsRef={sectionsRef} />
        <Projects sectionsRef={sectionsRef} />
        <Contact sectionsRef={sectionsRef} />
    </div>
  )
}

export default Home