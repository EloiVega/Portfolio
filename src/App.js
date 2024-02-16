import { useState } from 'react';
import './App.css';
import Navbar from './layout/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import "./utils/animations"
import Projects from './components/Projects';
import Accomplishments from './components/Accomplishments';
import Footer from './layout/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


function App() {
  let modal;
  const closeModal = () => {
    if(!modal) modal = document.querySelector(".modal");
    if(!modal.classList.contains("modal-closed"))
    modal.classList.add("modal-closed");
}
const openModal = () => {
  if(!modal) modal = document.querySelector(".modal");
    if(modal.classList.contains("modal-closed"))
      modal.classList.remove("modal-closed");
  }

  return (
    <div>
      <a href='#' id="backToTop" className = "w-10 md:w-12 h-10 md:h-12 rounded-full flex justify-center items-center fixed bottom-2 right-2 bg-[var(--orange-faded-color)] text-dark-color text-2xl md:text-3xl z-30">
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
      <Navbar/>
      <Hero/>
      <Projects/>
      <About openModal = {openModal} closeModal={closeModal}/>
      <Accomplishments/>
      <div id="farewell" className="w-screen mb-[10vh] orange flex flex-col justify-center items-center gap-10 h-[50vh] text-5xl font-bold">
        <h1 className = "text-[var(--orange-color)] text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Thanks for visiting my websites</h1>
        <div id="words" className = "h-64 text-transparent bg-clip-text bg-gradient-to-r from-[var(--orange-color)] to-gray-200">
          <span>Stay</span>
          <span> </span>
          <span>awesome!</span>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
