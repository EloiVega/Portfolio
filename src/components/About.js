import styles from '../css/about.module.css';
import AboutCard from './AboutCard';

import about2Image from '../assets/about2.png';
import about3Image from '../assets/about3.jpg';
import about4Image from '../assets/about4.jpg';

const cards = [
    {
        title: "Developer",
        mainDescription: "My Critical Thinking Leads My Work",
        subDescription: "four years of academic studies, tens for projects",
        image: about3Image,
        colorTheme: "blue",
    },
    {
        title: "Freelancer",
        mainDescription: "My Critical Thinking Leads My Work",
        subDescription: "four years of academic studies, tens for projects",
        image: about3Image,
        colorTheme: "yellow",
    },
    {
        title: "Mentor",
        mainDescription: "My Critical Thinking Leads My Work",
        subDescription: "four years of academic studies, tens for projects",
        image: about3Image,
        colorTheme: "green",
    },
    {
        title: "Problem Solver",
        mainDescription: "My Critical Thinking Leads My Work",
        subDescription: "four years of academic studies, tens for projects",
        image: about4Image,
        colorTheme: "orange",
    },
]

const About = () => {
  return (
    <div id = "about" className='m-auto mt-40 xl:w-screen w-screen xl:w-[80vw] flex flex-col items-center h-auto text-white'>
        <AboutCard cardData = {cards[0]} id = "about1"/>
        <AboutCard cardData = {cards[1]} id = "about2" reverse = {true}/>
        <AboutCard cardData = {cards[2]} id = "about3"/>
        <AboutCard cardData = {cards[3]} id = "about4" reverse = {true}/>
    </div>
  )
}

export default About