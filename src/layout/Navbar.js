import React from 'react'
import styles from '../css/navbar.module.css'
const Navbar = () => {
  return (
    <div className = "h-40 w-screen z-40 absolute">
      <div className = "h-full container m-auto flex justify-between items-start mt-8">
        {/* <div id = "logo" className={`h-full w-4/12 flex justify-center items-center font-bold ${styles.navbarLogo}`}>
          <span className = "tracking-wider text-2xl text-brighter-green-color translate-y-0.5">Eslam </span>
          <span className = "tracking-widest text-5xl m-2">EO</span>
          <span className = "tracking-wider text-2xl text-brighter-green-color translate-y-0.5"> Onsy</span>
        </div> */}
        <div id = "nav-list" className = "text-white tracking-widest grow">
          <ul className="flex justify-center text-sm sm:text-xl font-bold gap-6 sm:gap-14">
            <li>
              <a href = "#about">About</a>
            </li>
            <li>
              <a href = "#skills">Skills</a>
            </li>
            <li>
              <a href = "#projects">Projects</a>
            </li>
            <li>
              <a href = "#contact-me">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar