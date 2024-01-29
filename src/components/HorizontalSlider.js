import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalSlider = () => {
  const container = useRef();
  const sections = gsap.utils.toArray('div>section');
  const texts = gsap.utils.toArray('.animate-text');

  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
  if(!pageLoaded){
    setTimeout(() => setPageLoaded(true), 10);
    return;
  }

  let el = container.current;
  let scrollTween = gsap.fromTo(sections, {x: 200} , {
        xPercent: -100 * (sections.length-1),
        ease: "none",
        scrollTrigger: {
          trigger: el,
          pin: true,
          scrub: 1,
          start: "top center",
          end: "+=2500",
          // markers: true,
        },
      })
  
  sections.forEach(section => {
    let text = section.querySelectorAll('.anim');
    gsap.from(text,{
      y:-80,
      opacity: 0,
      duration: 2,
      ease: "elastic",
      stagger: 0.1,
      scrollTrigger: {
        trigger: section,
        containerAnimation: scrollTween,
        start: "left center",
        // markers: true,
      }
    })
  })
  }, [pageLoaded])
  return (
    <div  ref = {container} className="px-20 mb-96 w-[100vw] flex gap-10 unwrap overflow-x-hidden items-center bg-white">
        <section className="animate-text-block min-w-[40vw] p-5 flex flex-col items-start text-left">
          <h1 className="anim text-2xl font-bold tracking-wide">Title 1</h1>
          <p className="anim tracking-wide font-semibold">1111111 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, debitis inventore aliquam placeat hic impedit? Similique et laudantium, natus quam reprehenderit eaque, ab molestiae optio quo repellendus cum porro quasi?</p>
        </section>
        <section className="animate-text-block min-w-[40vw] p-5 flex flex-col justify-center items-start text-left">
          <h1 className="anim text-2xl font-bold tracking-wide">Title 2</h1>
          <p className="anim tracking-wide font-semibold">2222222 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, debitis inventore aliquam placeat hic impedit? Similique et laudantium, natus quam reprehenderit eaque, ab molestiae optio quo repellendus cum porro quasi?</p>
        </section>
        <section className="animate-text-block min-w-[40vw] p-5 flex flex-col justify-center items-start text-left">
          <h1 className="anim text-2xl font-bold tracking-wide">Title 3</h1>
          <p className="anim tracking-wide font-semibold">3333333 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, debitis inventore aliquam placeat hic impedit? Similique et laudantium, natus quam reprehenderit eaque, ab molestiae optio quo repellendus cum porro quasi?</p>
        </section>
        <section className="animate-text-block min-w-[40vw] p-5 flex flex-col justify-center items-start text-left">
          <h1 className="anim text-2xl font-bold tracking-wide">Title 4</h1>
          <p className="anim tracking-wide font-semibold">4444444 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, debitis inventore aliquam placeat hic impedit? Similique et laudantium, natus quam reprehenderit eaque, ab molestiae optio quo repellendus cum porro quasi?</p>
        </section>
        <section className="animate-text-block min-w-[40vw] p-5 flex flex-col justify-center items-start text-left">
          <h1 className="anim text-2xl font-bold tracking-wide">Title 5</h1>
          <p className="anim tracking-wide font-semibold">5555555 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, debitis inventore aliquam placeat hic impedit? Similique et laudantium, natus quam reprehenderit eaque, ab molestiae optio quo repellendus cum porro quasi?</p>
        </section>
        <section className="animate-text-block min-w-[40vw] p-5 flex flex-col justify-center items-start text-left">
          <h1 className="anim text-2xl font-bold tracking-wide">Title 6</h1>
          <p className="anim tracking-wide font-semibold">6666666 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, debitis inventore aliquam placeat hic impedit? Similique et laudantium, natus quam reprehenderit eaque, ab molestiae optio quo repellendus cum porro quasi?</p>
        </section>
      </div>
  )
}

export default HorizontalSlider