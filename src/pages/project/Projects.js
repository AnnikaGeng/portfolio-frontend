import React from 'react'
import './Projects.scss'
import noteKeeper from '../../assets/noteKeeper.png'
import {TbBrandHtml5, TbBrandCss3, TbBrandReact,TbBrandMongodb} from 'react-icons/tb'
import {DiNodejsSmall} from 'react-icons/di'

const Projects = () => {
  return (
    <section className='projects'>
    <h1>My projects</h1>

    {/* the project template */}
    <div className='project_detail'>
        <div className='text-desc'>
            <h2>Full Stack Notes Keeper APP</h2>
            <p className='description'>
            Built a full stack Event-Based dynamiac website side and deployed onto Render. 
            Built up Frontend View Engine using HTML/CSS under React to allow user post and visit notes online. 
            Created the application layer with Node.js + Express.js to handle CRUD operations, and using MongoDB to establish the database layer.
            </p>
            <div className='techStack'>
            <TbBrandHtml5 size={24} className='project_icons' />
            <TbBrandCss3 size={24} className='project_icons' />
            <TbBrandReact size={24} className='project_icons' />
            <DiNodejsSmall size={24} className='project_icons' />
            <TbBrandMongodb size={24} className='project_icons' />
            </div>
            <div className='btn btn-detail'>
                <a href='www.google.com'>View It Here</a>
                <a href='www.google.com'>View Github Repo</a>
            </div>
        </div>
        <div className='previewImg'>
        <img className='projectDetail' src={noteKeeper} alt='this is preview for the project'/>
        </div>
    </div>
    
    </section>
  )
}

export default Projects