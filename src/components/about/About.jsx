import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id = 'about'>
      <h5>Get To Know </h5>
      <h2> About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Me'/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
          </div>
          <p>
            I graduated Computer Science at University of Texas at Arlington. I am working for the start-up project, outzoner. This is a social web application where people can share their story about their job and ways to land a new job.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About