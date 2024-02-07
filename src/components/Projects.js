import styles from '../css/project.module.css';
import ProjectCard from './ProjectCard';

import project1Image from '../assets/Xeomvy.png'
import project2Image from '../assets/Yojad.png';
import project3Image from '../assets/Knovies.png';
import project4Image from '../assets/360Solutions.png';
import project1MobileImage from '../assets/Xeomvy Mobile.png'
import project2MobileImage from '../assets/Yojad Mobile.png';
import project3MobileImage from '../assets/Knovies Mobile.png';
import project4MobileImage from '../assets/360solutions Mobile.png';

const cards = [
    {
        title: "Yojad",
        mainDescription: "Modern clean-looking Ecommerce style web application",
        subDescription: "Large scale web application, Carousels, Carts and A lot more",
        technologies: ["ReactJS", "Material UI" ,"FontAwesomeIcons"],
        image: project2Image,
        mobileImage: project2MobileImage,
        colorTheme: "blue",
    },
    {
        title: "Xeomvy",
        mainDescription: "An astonishing marketing replica website for XdemvyTM",
        subDescription: "Contains animations, Sliding backgrounds, Fully functioning forms and multiform ISI section",
        technologies: ["Drupal CMS", "GSAP"],
        image: project1Image,
        mobileImage: project1MobileImage,
        colorTheme: "yellow",
    },
    {
        title: "Knovies",
        mainDescription: "Know all about your Movies/TVSeries, Rating, Cast, Episodes, you name it!",
        subDescription: "Draggable Sliders, Searching Mechanism and Prediction and Dynamic Info Loading for any movie or series and their related media",
        technologies: ["JavaScript", "HTML5/CSS3", "Material Icons"],
        image: project3Image,
        mobileImage: project3MobileImage,
        colorTheme: "green",
    },
    {
        title: "The360Solutions",
        mainDescription: "My Critical Thinking Leads My Work",
        subDescription: "four years of academic studies, tens for projects",
        technologies: ["ReactJS", "TailwindCSS", "FontAwesomeIcons"],
        image: project4Image,
        mobileImage: project4MobileImage,
        colorTheme: "orange",
    },
]

const Projects = () => {
  return (
    <div id = "projects" className='m-auto mt-40 xl:w-screen w-screen xl:w-[80vw] flex flex-col items-center h-auto text-white blue'>
        <h1 id = "projects-title" className = "text-6xl text-outline">PROJECTS</h1>
        <ProjectCard cardData = {cards[0]} id = "project1"/>
        <ProjectCard cardData = {cards[1]} id = "project2" reverse = {true}/>
        <ProjectCard cardData = {cards[2]} id = "project3"/>
        <ProjectCard cardData = {cards[3]} id = "project4" reverse = {true}/>
    </div>
  )
}

export default Projects