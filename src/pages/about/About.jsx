import React from 'react'
import './about.css'
import Header from '../../components/portfolioComp/header/Header'
import Footer from '../../components/footer/Footer'
import Experience from '../../components/portfolioComp/experience/Experience'
import AboutMe from '../../components/portfolioComp/aboutMe/AboutMe'
import ServicesMe from '../../components/portfolioComp/servicesMe/ServicesMe'
import ProjectsMe from '../../components/portfolioComp/projectsMe/ProjectsMe'
import TestMe from '../../components/portfolioComp/testMe/TestMe'
import Contact from '../contact/Contact'
import Testimonial from '../../components/homeComp/testimonials/Testimonial'
const About = () => {
  return (
    <div className='portfolio--container'>
      <Header />
      <AboutMe />
      <Experience />
      <ServicesMe />
      <ProjectsMe />
      <Testimonial />
      <Contact />
      <button className='btn'>hola</button>
    </div>
  )
}

export default About