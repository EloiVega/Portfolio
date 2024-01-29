import { useEffect, useRef, useState } from 'react';
import './App.css';
import HorizontalSlider from './components/HorizontalSlider';
import Navbar from './layout/Navbar';
import Hero from './components/Hero';


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
  
  const container1Ref = useRef();
  const container2Ref = useRef();

  const [pageLoaded, setPageLoaded] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="w-[100vw] h-[60vh] font-bold tracking-widest text-6xl flex justify-center items-center">
        <h1>SCROLL DOWN</h1>
      </div>
      <div className="w-[100vw] h-[60vh] font-bold tracking-widest text-6xl flex justify-center items-center">
        <h1>SCROLL DOWN</h1>
      </div>

      <HorizontalSlider ref = {container1Ref}/>

      <div className="w-[100vw] h-[60vh] font-bold tracking-widest text-6xl flex justify-center items-center">
        <h1>SCROLL DOWN</h1>
      </div>
      <div className="w-[100vw] h-[60vh] font-bold tracking-widest text-6xl flex justify-center items-center">
        <h1>SCROLL DOWN</h1>
      </div>
      <div className="w-[100vw] h-[60vh] font-bold tracking-widest text-6xl flex justify-center items-center">
        <h1>SCROLL DOWN</h1>
      </div>
    </div>
  );
}

export default App;
