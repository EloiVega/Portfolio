import { useEffect, useRef, useState } from 'react';
import './App.css';
import Navbar from './layout/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import "./utils/animations"
import Projects from './components/Projects';
import Accomplishments from './components/Accomplishments';

function App() {
  
  // useGSAP(() => {
    
    //   gsap.to(sections, {
      //     xPercent: -100 * (sections.length-1),
      //     ease: "none",
      //     scrollTrigger: {
  //       trigger: container,
  //       start: "bottom center",
  //       markers: true,
  //     },
  //   })
  
  // }, {scope: container, revertOnUpdate: true})
  
  const [closedModal, setClosedModal] = useState(true);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Projects/>
      <About closedModal = {closedModal} setClosedModal={setClosedModal}/>
      <Accomplishments/>
      <div id="farewell" className="w-screen orange flex flex-col justify-center items-center gap-10 bg-dark-color h-[50vh] text-5xl font-bold">
        <h1 className = "text-[var(--orange-color)]">Thanks for visiting my websites</h1>
        <span className = "text-transparent bg-clip-text bg-gradient-to-r from-[var(--orange-color)] to-gray-200">Stay Awesome!</span>
      </div>
    </div>
  );
}

export default App;
