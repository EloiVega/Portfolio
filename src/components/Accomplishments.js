import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import ECPC2019 from '../assets/Certificate of Achievement ECPC2019.png';
import ECPC2020 from '../assets/Certificate of Achievement ECPC2020.png';
import ContributionAppritiation from "../assets/Certificate of Appreciation 1.png";
import PSTParticipation from "../assets/Certificate of participation PST.png";
import ICITPresentation from "../assets/Certificate of presentation ICIT.png";

gsap.registerPlugin(ScrollTrigger);

const Accomplishments = () => {
    const container = useRef();
  const sections = gsap.utils.toArray('#accomplishments>section');
  const texts = gsap.utils.toArray('#accomplishments .animate-text');

  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    if(!pageLoaded){
        setTimeout(() => setPageLoaded(true), 10);
        return;
    }

    let el = container.current;
    let scrollTween = gsap.fromTo(sections, {x: 200} , {
            xPercent: window.innerWidth > 1200? (-100 * (sections.length-0.6)) : window.innerWidth > 768? (-130 * (sections.length-1)): window.innerWidth > 375? (-140 * (sections.length-1)): (-150 * (sections.length-1)),
            ease: "none",
            scrollTrigger: {
            trigger: el,
            pin: true,
            scrub: 1,
            start: "top 15%",
            end: "+=2500",
            // markers: true,
            },
        })
    sections.forEach(section => {
        let img = section.querySelectorAll("img");
        gsap.to(img, {
            scale: 1.1,
            y: -15,
            scrollTrigger: {
                trigger: section,
                containerAnimation:scrollTween,
                start: "left 50%",
                end: "left -10%",
                toggleActions: "play reverse play reverse"
            }
        })
    })
    })
  return (
    <div id = "accomplishments" ref = {container} className="my-[60vh] py-20 mb-96 w-[100vw] flex gap-32 unwrap overflow-x-hidden items-center bg-darker-color">
        <section className="animate-text-block w-[350px] xl:w-[720px] md:w-[720px] p-5 flex flex-col items-start text-left">
          <div className="inner h-96 xl:h-[420px] w-[350px] xl:w-[720px] green text-center text-[var(--green-color)] font-bold text-2xl">
              <h1 className = "text-outline mr-32 text-3xl md:text-4xl xl:text-5xl w-full h-full flex items-center justify-center">MY ACCOMPLISHMENTS</h1>
          </div>
        </section>
        <section className="animate-text-block w-[350px] xl:w-[720px] p-5 flex flex-col items-start text-left">
          <div className="inner h-64 xl:h-[420px] w-[350px] xl:w-[720px] green text-center text-[var(--green-color)] font-bold text-2xl">
              <img className = "w-full h-5/6 border-solid border-4 rounded-lg" src={ECPC2020} alt="A certificate of the Egyptian Collegiate Programming Contest Team Ranking on year 2020" />
              <h2>My team's ranking in the ECPC contest<br />on 2020</h2>
          </div>
        </section>
        <section className="animate-text-block w-[350px] xl:w-[720px] p-5 flex flex-col items-start text-left">
          <div className="inner h-64 xl:h-[420px] w-[350px] xl:w-[720px] green text-center text-[var(--green-color)] font-bold text-2xl">
            <img className = "w-full h-5/6 border-solid border-4 rounded-lg" src={ECPC2019} alt="A certificate of the Egyptian Collegiate Programming Contest Team Ranking on year 2019" />
            <h2>My team's ranking in the ECPC contest<br />on 2019</h2>
          </div>
        </section>
        <section className="animate-text-block w-[350px] xl:w-[720px] p-5 flex flex-col items-start text-left">
          <div className="inner h-64 xl:h-[420px] w-[350px] xl:w-[720px] green text-center text-[var(--green-color)] font-bold text-2xl">
              <img className = "w-full h-5/6 border-solid border-4 rounded-lg" src={ContributionAppritiation} alt="A certificate of appreciation for my contribution towards the problem solving community" />
              <h2>Given by the legendary Egyptian coach,<br />coach Abdelwahab Muhammed </h2>
          </div>
        </section>
        <section className="animate-text-block w-[350px] xl:w-[720px] p-5 flex flex-col items-start text-left">
          <div className="inner h-64 xl:h-[420px] w-[350px] xl:w-[720px] green text-center text-[var(--green-color)] font-bold text-2xl">
              <img className = "w-full h-5/6 border-solid border-4 rounded-lg" src={PSTParticipation} alt="A certificate proof for my participation in the Problem Solving Training organization in egypt" />
              <h2>My participation in the Problem Solving Training organization in egypt</h2>
          </div>
        </section>
        <section className="animate-text-block w-[350px] xl:w-[720px] p-5 flex flex-col items-start text-left">
          <div className="inner h-64 xl:h-[420px] w-[350px] xl:w-[720px] green text-center text-[var(--green-color)] font-bold text-2xl">
              <img className = "w-full h-5/6 border-solid border-4 rounded-lg" src={ICITPresentation} alt="A Certificate of my presentation in the international ICIT conference" />
              <h2>I was present in the ICIT 2-day conference</h2>
          </div>
        </section>
      </div>
  )
}

export default Accomplishments