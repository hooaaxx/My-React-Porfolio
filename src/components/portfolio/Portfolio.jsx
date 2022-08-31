import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'E-blotter System',
    github: 'https://github.com/thantienduc/Lend-an-eye'
  },
  {
    id: 2,
    image: IMG2,
    title: 'LARAVEL livewire E-commerce',
    github: 'https://github.com/thantienduc/PHMS-2020'
  },
  {
    id: 3,
    image: IMG3,
    title: 'My react portfolio',
    github: 'https://github.com/thantienduc/Comineed'
  },
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map (({id, image, title, github}) => {
            return (
              <article key={id} className='portfolio__items'>
                <div className="portfolio__items-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__items-cta">
                  <a href={github} className='btn'>Github</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio