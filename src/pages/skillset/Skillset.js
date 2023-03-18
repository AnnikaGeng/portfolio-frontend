import React from 'react'
import './Skillset.scss'
import {TbBrandPython, TbBrandJavascript, TbBrandHtml5, TbBrandCss3, TbSql, 
    TbBrandReact, TbBrandMysql, TbBrandMongodb} from 'react-icons/tb'
import {FaJava} from 'react-icons/fa'
import {DiNodejsSmall} from 'react-icons/di'
import {AiFillGithub} from 'react-icons/ai'
import {SiSpringboot} from 'react-icons/si'

const Skillset = () => {
  return (
    <section className='skill_container'>
        <h1>My Skill Set</h1>
        
        <div className='skillset'>
          <div className='languages'>
            <div>
                <TbBrandPython size={20} className='skill_icons' />
                <div>Python</div>
            </div>
            <div>
                <FaJava size={20} className='skill_icons' />
                <div>Java</div>
            </div>
            <div>
                <TbBrandJavascript size={20} className='skill_icons' />
                <div>Javascript</div>
            </div>
            <div>
                <TbBrandHtml5 size={20} className='skill_icons' />
                <div>HTML5</div>
            </div>
            <div>
                <TbBrandCss3 size={20} className='skill_icons' />
                <div>CSS3</div>
            </div>
            <div>
                <TbSql size={20} className='skill_icons' />
                <div>SQL</div>
            </div>
          </div>
          <div className='tools'>
            <div>
                <TbBrandReact size={20} className='skill_icons' />
                <div>React</div>
            </div>
            <div>
                <AiFillGithub size={20} className='skill_icons' />
                <div>Git</div>
            </div>
            <div>
                <TbBrandMysql size={20} className='skill_icons' />
                <div>MySQL</div>
            </div>
            <div>
                <TbBrandMongodb size={20} className='skill_icons' />
                <div>MongoDB</div>
            </div>
          </div>
          <div className='frameworks'>
            <div>
                <SiSpringboot size={20} className='skill_icons' />
                <div>Springboot</div>
            </div>
            <div>
                <DiNodejsSmall size={20} className='skill_icons' />
                <div>NodeJs</div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skillset