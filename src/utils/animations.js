import { technicalSkills } from "./skillsData";
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const assignProjectBackgroundAnimations = (projectId, timeline, isReverse) => {
    timeline.fromTo(`#${projectId}-backgroundDecoration`, {width:0, autoAlpha: 0}, {width:"45%", autoAlpha: 1, duration: 0.1});
    timeline.fromTo(`#${projectId}-backgroundDecoration>div`, {width:0, autoAlpha: 0}, {width:"80%", autoAlpha: 1, duration: 0.1});
    timeline.fromTo(`#${projectId}-backgroundDecoration>div>div`, {width:0, autoAlpha: 0}, {width:"65%", autoAlpha: 1, duration: 0.1});
    timeline.fromTo(`#${projectId}-img #img2`, {x: isReverse? -10 : 10 , autoAlpha: 0}, {x:0,  autoAlpha: 1,duration: 0.1});
}

const assignProjectAnimations = (projectId, timeline, isReverse) => {
    timeline.fromTo(`#${projectId}-title`, {x: isReverse? 10 : -10, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 0.2});
    timeline.fromTo(`#${projectId}-img`, {x: isReverse? -10 : 10, autoAlpha: 0}, {x:0,  autoAlpha: 1,duration: 0.2})
    timeline.fromTo(`#${projectId}-main-description`, {x: isReverse? 10 : -10, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 0.3});
    timeline.fromTo(`#${projectId}-sub-description`, {x: isReverse? 10 : -10, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 0.3});
    timeline.fromTo(`#${projectId}-technologies`, {x: isReverse? 10 : -10, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 0.3});
}

setTimeout(()=>{
    /* ----- NAVIGATION LINKS ANIMATIONS ----- */
    let navLinksTimeline = gsap.timeline({scrollTrigger: {
        trigger: "#projects",
        start: "top 150%",
        end: "top 90%",
        toggleActions: "play reverse play reverse",
    }});
    navLinksTimeline.fromTo("#projectLink", {y:-60}, {y: 0, duration:0.1})
    navLinksTimeline.fromTo("#skillsLink", {y:-60}, {y: 0, duration:0.1})
    navLinksTimeline.fromTo("#projectsLink", {y:-60}, {y: 0, duration:0.1})
    navLinksTimeline.fromTo("#contactLink", {y:-60}, {y: 0, duration:0.1})
    
    /* ----- PROJECTS SECTION ANIMATIONS ----- */
    gsap.fromTo("#projects-title", { y: 50, autoAlpha: 0}, {
        y: -100,
        autoAlpha: 1,
        scrollTrigger: {
            trigger: "#projects-title",
            start: "top 80%",
            end: "top: 20%",
            scrub: true,
        }
    })
    let projects = document.querySelectorAll("#projects > div");
    projects.forEach((project, index) => {
        const projectTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: project,
                start: window.innerWidth > 375? "top -5%": "top -20%",
                pin: true,
                pinSpacing: true,
                scrub: true,
            }
        })
        const projectBackgroundTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: project,
                start: window.innerWidth > 375? "top -5%": "top -20%",
                scrub: true,
            }
        })

        const projectId = project.getAttribute("id");
        const isReverse = (index%2 == 1);
        assignProjectBackgroundAnimations(projectId, projectBackgroundTimeline, isReverse);
        assignProjectAnimations(projectId, projectTimeline, isReverse);
    })

    /* ----- SKILLS SECTION ANIMATIONS ----- */
    gsap.fromTo("#about-title", { y: 0, autoAlpha: 0}, {
        y: -50,
        autoAlpha: 1,
        scrollTrigger: {
            trigger: "#about-title",
            start: "top 80%",
            end: "top: 50%",
            scrub: true,
        }
    })

    technicalSkills.forEach(skill => {
        gsap.fromTo(`#${skill.id} #progress-fill`, {width: 0}, {
            width:`${skill.progress}%`, duration: 1,
            scrollTrigger: {
                trigger: "#skills",
                start: "top 80%",
                toggleActions: "play reverse play reverse",
            }
        })
    })

    /* ----- FAREWELL SECTION ANIMATIONS ----- */
    let farewellTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#farewell",
            start: "top -200%",
        }
    })

    farewellTimeline.fromTo("#farewell h1", {y: 50, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 1});
    farewellTimeline.fromTo("#farewell #words", {y: 50, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 0.5});
}, 200);