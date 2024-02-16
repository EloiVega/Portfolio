import React from 'react'
import styles from '../css/navbar.module.css'
const Navbar = () => {
  let about;
  let skills;
  let projects;
  let footer;
  setTimeout(() => {
    about = document.querySelector("#about")
    skills = document.querySelector("#skills")
    projects = document.querySelector("#projects")
    footer = document.querySelector("#footer")
  }, 100)
  const handleNavClick = (element, offset) => {
    window.scrollTo(0, element.offsetTop + (offset? offset:0));
  }
  return (
    <div className = "h-40 w-screen z-40 absolute">
      <div className = "h-full container m-auto flex justify-between items-start mt-8">
        <div id = "nav-list" className = "text-white tracking-widest grow">
          <ul className="flex justify-center text-sm sm:text-xl font-bold gap-6 sm:gap-14">
            <li onClick={()=>{handleNavClick(about)}} id = "aboutLink" className = "cursor-pointer"> About </li>
            <li onClick={()=>{handleNavClick(skills, -150)}} id = "skillsLink" className = "cursor-pointer"> Skills </li>
            <li onClick={()=>{handleNavClick(projects, -110)}} id = "projectsLink" className = "cursor-pointer"> Projects </li>
            <li onClick={()=>{handleNavClick(footer)}} id = "contactLink" className = "cursor-pointer"> Contact Me </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar