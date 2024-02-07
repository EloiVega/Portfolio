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
    
    /* ----- ABOUT SECTION ANIMATIONS ----- */

    let projects = document.querySelectorAll("#projects > div");
    projects.forEach((project, index) => {
        const projectTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: project,
                start: "top top",
                pin: true,
                pinSpacing: true,
                scrub: true,
            }
        })
        const projectBackgroundTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: project,
                start: "top top",
                scrub: true,
            }
        })

        const projectId = project.getAttribute("id");
        const isReverse = (index%2 == 1);
        assignProjectBackgroundAnimations(projectId, projectBackgroundTimeline, isReverse);
        assignProjectAnimations(projectId, projectTimeline, isReverse);
    })

    // let project1Timeline = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: "#project1",
    //         start: "top top",
    //         pin: true,
    //         pinSpacing: true,
    //         scrub: true,
    //     }
    // })
    // let project1BackgroundTimeline = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: "#project1",
    //         start: "top top",
    //         scrub: true,
    //     }
    // })
    // project1BackgroundTimeline.fromTo("#project1-backgroundDecoration", {width:0, autoAlpha: 0}, {width:"45%", autoAlpha: 1, duration: 0.1});
    // project1BackgroundTimeline.fromTo("#project1-backgroundDecoration>div", {width:0, autoAlpha: 0}, {width:"80%", autoAlpha: 1, duration: 0.1});
    // project1BackgroundTimeline.fromTo("#project1-backgroundDecoration>div>div", {width:0, autoAlpha: 0}, {width:"65%", autoAlpha: 1, duration: 0.1});
    // project1BackgroundTimeline.fromTo("#project1-img #img2", {x:10, autoAlpha: 0}, {x:0,  autoAlpha: 1,duration: 0.1});

    // project1Timeline.fromTo("#project1-title", {x: -10, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 0.2});
    // project1Timeline.fromTo("#project1-img", {x:10, autoAlpha: 0}, {x:0,  autoAlpha: 1,duration: 0.2})
    // project1Timeline.fromTo("#project1-main-description", {x: -10, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 0.3});
    // project1Timeline.fromTo("#project1-sub-description", {x: -10, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 0.3});
    // project1Timeline.fromTo("#project1-technologies", {x: -10, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 0.3});

    // let project2Timeline = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: "#project2",
    //         start: "top top",
    //         pin: true,
    //         pinSpacing: true,
    //         scrub: true,
    //     }
    // })
    // let project2BackgroundTimeline = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: "#project2",
    //         start: "top top",
    //         scrub: true,
    //     }
    // })
    // project2BackgroundTimeline.fromTo("#project2-backgroundDecoration", {width:0, autoAlpha: 0}, {width:"45%", autoAlpha: 1, duration: 0.1});
    // project2BackgroundTimeline.fromTo("#project2-backgroundDecoration>div", {width:0, autoAlpha: 0}, {width:"80%", autoAlpha: 1, duration: 0.1});
    // project2BackgroundTimeline.fromTo("#project2-backgroundDecoration>div>div", {width:0, autoAlpha: 0}, {width:"65%", autoAlpha: 1, duration: 0.1});
    // project2BackgroundTimeline.fromTo("#project2-img #img2", {x:-10, autoAlpha: 0}, {x:0,  autoAlpha: 1,duration: 0.1});


    // project2Timeline.fromTo("#project2-title", {x: 10, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 0.2});
    // project2Timeline.fromTo("#project2-img", {x:-10, autoAlpha: 0}, {x:0,  autoAlpha: 1,duration: 0.2})
    // project2Timeline.fromTo("#project2-main-description", {x: 10, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 0.3});
    // project2Timeline.fromTo("#project2-sub-description", {x: 10, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 0.3});
    // project2Timeline.fromTo("#project2-technologies", {x: 10, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 0.3});

    // let project3Timeline = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: "#project3",
    //         start: "top top",
    //         pin: true,
    //         pinSpacing: true,
    //         scrub: true,
    //     }
    // })
    // let project3BackgroundTimeline = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: "#project3",
    //         start: "top top",
    //         scrub: true,
    //     }
    // })
    // project3BackgroundTimeline.fromTo("#project3-backgroundDecoration", {width:0, autoAlpha: 0}, {width:"45%", autoAlpha: 1, duration: 0.1});
    // project3BackgroundTimeline.fromTo("#project3-backgroundDecoration>div", {width:0, autoAlpha: 0}, {width:"80%", autoAlpha: 1, duration: 0.1});
    // project3BackgroundTimeline.fromTo("#project3-backgroundDecoration>div>div", {width:0, autoAlpha: 0}, {width:"65%", autoAlpha: 1, duration: 0.1});
    // project3BackgroundTimeline.fromTo("#project3-img #img2", {x:10, autoAlpha: 0}, {x:0,  autoAlpha: 1,duration: 0.1});

    // project3Timeline.fromTo("#project3-title", {x: -10, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 0.2});
    // project3Timeline.fromTo("#project3-img", {x:10, autoAlpha: 0}, {x:0,  autoAlpha: 1,duration: 0.2})
    // project3Timeline.fromTo("#project3-main-description", {x: -10, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 0.3});
    // project3Timeline.fromTo("#project3-sub-description", {x: -10, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 0.3});
    // project3Timeline.fromTo("#project3-technologies", {x: -10, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 0.3});

    // let project4Timeline = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: "#project4",
    //         start: "top top",
    //         pin: true,
    //         pinSpacing: true,
    //         scrub: true,
    //     }
    // })
    // let project4BackgroundTimeline = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: "#project4",
    //         start: "top top",
    //         scrub: true,
    //     }
    // })
    // project4BackgroundTimeline.fromTo("#project4-backgroundDecoration", {width:0, autoAlpha: 0}, {width:"45%", autoAlpha: 1, duration: 0.1});
    // project4BackgroundTimeline.fromTo("#project4-backgroundDecoration>div", {width:0, autoAlpha: 0}, {width:"80%", autoAlpha: 1, duration: 0.1});
    // project4BackgroundTimeline.fromTo("#project4-backgroundDecoration>div>div", {width:0, autoAlpha: 0}, {width:"65%", autoAlpha: 1, duration: 0.1});
    // project4BackgroundTimeline.fromTo("#project4-img #img2", {x:-10, autoAlpha: 0}, {x:0,  autoAlpha: 1,duration: 0.1});

    // project4Timeline.fromTo("#project4-title", {x: 10, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 0.2});
    // project4Timeline.fromTo("#project4-img", {x:-10, autoAlpha: 0}, {x:0,  autoAlpha: 1,duration: 0.2})
    // project4Timeline.fromTo("#project4-main-description", {x: 10, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 0.3});
    // project4Timeline.fromTo("#project4-sub-description", {x: 10, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 0.3});
    // project4Timeline.fromTo("#project4-technologies", {x: 10, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 0.3});

}, 100);