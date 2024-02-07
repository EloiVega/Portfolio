import React, { useState } from 'react'
import styles from '../css/hero.module.css'
import { Typewriter, useTypewriter } from 'react-simple-typewriter'

const Hero = () => {
  const [firstTextDone, setFirstTextDone] = useState(false);
  const [secondTextDone, setSecondTextDone] = useState(false);

  const [greetingText, greetingFlags] = useTypewriter({
    words: ["Hi, I'm"],
    typeSpeed: 100
  })
  const [NameText, nameFlags] = useTypewriter({
    delaySpeed: 200,
    words: ["", "Eslam Onsy"],
    typeSpeed: 100
  })
  const [additionalText, additionalFlags] = useTypewriter({
    delaySpeed: 300,
    words: ["", "And this is my Resume"],
    typeSpeed: 100
  })

  return (
    <div id = "hero" className = {`h-screen w-screen relative z-0 ${styles.mainContainer}`}>
        <div id = "hero-content" className="z-10 text-white absolute font-bold flex flex-col pl-4 sm:pl-8 top-1/2 -translate-y-1/2">
          <span className='block text-4xl xl:text-6xl font-light'>{greetingText}</span>
          <span className='block text-5xl xl:text-7xl'>{NameText}</span>
          <span className='block text-3xl xl:text-5xl font-light'>{additionalText}</span>
        </div>
    </div>
  )
}

export default Hero