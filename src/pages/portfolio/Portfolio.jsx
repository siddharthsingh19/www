import React from 'react'
import './portfolio.css'
import Header from '../../components/portfolioComp/header/Header'
import Experience from '../../components/portfolioComp/experience/Experience'
import AboutMe from '../../components/portfolioComp/aboutMe/AboutMe'
import ProjectsMe from '../../components/portfolioComp/projectsMe/ProjectsMe'
import Contact from '../contact/Contact'
const Portfolio = () => {
  return (
    <div className='portfolio--container'>
      <Header />
      <AboutMe />
      <Experience />
      <ProjectsMe />
      <Contact />
    </div>
  )
}

export default Portfolio