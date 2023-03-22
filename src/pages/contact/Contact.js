import React from 'react'
import './Contact.scss'
import { useState } from 'react'
import {AiOutlineLinkedin, AiOutlineGithub} from 'react-icons/ai'

const initialState = {
    name: "",
    email: "",
    message: ""
}

const Contact = ({sectionsRef}) => {
    const [formData, setFormData] = useState(initialState)
    const {name, email, message} = formData

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})

    }
  return (
    <section className='contact' id='contact' ref={(el) => (sectionsRef.current[3] = el)}>
        <div className='container'>
        <div className='contact_main'>
        <h1>Get in Touch</h1>
        <p className='welcome'>Ask for my resume or see if we can build something amazing together? I'd love to hear from you!</p>
        <form onChange={handleInputChange}>
            <input type='text'
            placeholder='Name*'
            required
            name='name'
            value={name}
            onChange={handleInputChange} />
            <input type='email'
            placeholder='Email*'
            required
            name='email'
            value={email}
            onChange={handleInputChange} />
            <textarea
            rows="5"
            cols="35"
            placeholder='Message*'
            className='message'
            required
            name='message'
            value={message}
            onChange={handleInputChange} />
            <button type='submit'>Send Email</button>
        </form>
        </div>
        <div className='contact_side'>
        <p className='find'>Find me on these platform too!</p>
        <div className='social_media'>
            <AiOutlineLinkedin className="icon" size={35} />
            <AiOutlineGithub className="icon" size={35} />
        </div>
        </div>
        </div>
    </section>
  )
}

export default Contact