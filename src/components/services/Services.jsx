import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design back-end for outzoner</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Set up infa and develope live notification feature for web application </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Applying pub/sub architecture to notice the change on web</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Set up staging and Heroku Pipline for app</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB */}
        <article className='service'>
          <div className="service__head">
            <h3>Mobile Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Applying Google Cloud Platform to deploy back-end</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design API for translating image to text</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Applied Python knowledge to create function using GCP API that kept the server operating on Google Function
platform in form of deployment</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services