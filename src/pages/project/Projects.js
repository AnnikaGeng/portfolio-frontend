import React from 'react'
import './Projects.scss'
import {TbBrandHtml5, TbBrandCss3, TbBrandReact,TbBrandMongodb} from 'react-icons/tb'
import {DiNodejsSmall} from 'react-icons/di'

const Projects = ({sectionsRef}) => {
  return (
    <section className='projects' id='projects' ref={(el) => (sectionsRef.current[1] = el)}>
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
                <a href='https://keeper-frontend.onrender.com' target='_blank' rel='noreferrer'
                >View It Here</a>
                <a href='https://github.com/AnnikaGeng/keeper-frontend' target='_blank' rel='noreferrer'>View Github Repo</a>
            </div>
        </div>
        <div className='previewImg'>
        <img className='projectDetail' src="https://res.cloudinary.com/drk3j2xi8/image/upload/v1679255273/noteKeeper_fkinii.png" alt='this is preview for the project'/>
        </div>
    </div>
    
    </section>
  )
}

export default Projects