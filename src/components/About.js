import Modal from './Modal';
import Skills from './Skills';

const myStory = [
    "I'm a passionate programmer that caught an interest in programming before my trip to bachelor of computer science started,",
    `I started learning with Java which always gave me an upper edge to what I was learning through university, My focus was on the
    tiny details of how and why software behaves, which encouraged me to dive deeper into solidifying my programming base through
    problem solving`,

    `I have taken part of the problem solving training and was competing in the Egyptian Collegiate Programming Contest(ECPC)
    in 2019, In 2020 I took part in the competition again but that time, I qualified to the continental-level contest participating as a member
    of one of the best Trio in problem solving in the Arab/Africa region`,

    `I have built the foundation of the biggest problem solving community in the history of my university MUSTCPC, which held tutoring sessions, mentoring programs and
    fully fledge problem solving contest with levels ranging from complete beginner to regional competitor.`,

    `On 2021 I was on the competition ground as Coach for 11 teams which sums up to 33 competitors,
    all ready to show the difference of their work and show the skills they learnt throughout the year`,

    `This journey boosted my programming base as of what my aim was and allowed me to easily traverse through different technologies,
    picking up the basics easily and I was always off shortly to building simple applications. After about a year of tryign out different things 
    including Artificial Intelligence (AI), Neural Networks/Machine Learning (NN/ML), Mobile Development using (plain java, then kotlin and dart then a bit of flutter),
    to game development using C++ classes only making fully fledged grid ascii based games, to learning Unity Game Engine. I finally found the technology that suits me more,
    That is web development.`,

    `I startedd learning HTML5 and CSS3 through codecamps and managed to mark a few certificates through the process then I scattered the web to learn about JavaScript and its powers,
    it always amazed me how it can easily handle and maneuver problems that i frequently face in C++ and Java when trying to implement complex algorithms! and i ended my journey traversing 
    plain JavaScript with a fully functioning TMDB display. I called it Knovies (short for Know Your Movies)`,
    
    `Then my journey through React JS started and thats where I picked up more on Git version control and Node package mangement NPM, Using more of the terminal and learning more about 
    protocols, servers, APIs and rounding up all the features I currently fall back to in order to build such stunning websites.`,

    `During my mandatory military year, I managed to round up 3 essensial books, Grokking's algortithms(for refreshing my knowledge), Clean Architecture by Robert C Martin and Algorithms 4th edition by Robert Sedgewick, 
    These books helped me not only maintain my progress, but advance it further as I took a deeper look on things I already knew but never mastered. These three books weighted down my strengths and made me able to tackle tougher problems.`,

    `Afterwards I managed to learn more about other technologies to add to my arsenal such as NextJs, ThreeJs, Vite and a lot more!!`,

    `Now I'm finally ready to deliver the one project that rounds up all my efforts and shows most of what I learned throught my amazing learning journey, I am Eslam Onsy and I thank you for taking the time to read my story :)`,

    `Stay Amazing!`
]

const myStorySummary = `
    I'm a passionate programmer that caught an interest in programming before my trip to bachelor of computer science started,
    I started learning with Java which always gave me an upper edge to what I was learning through university, My focus was on the
    tiny details of how and why software behaves, which encouraged me to dive deeper into solidifying my programming base through
    problem solving, I have taken part of the problem solving training and was competing in the Egyptian Collegiate Programming Contest(ECPC)
    in 2019, In 2020 I took part in the competition again but that time, I qualified to the continental-level contest participating as a member
    of one of the best Trio in problem solving in the Arab/Africa region...
`

const About = ({openModal, closeModal}) => {
  return (
    <div id = "about" className='w-screen mt-[400px] h-auto py-20 xl:py-0 xl:h-[800px] bg-dark-color flex flex-col justify-center items-center gap-4 yellow'>
        <h1 id = "about-title" className = "text-5xl text-outline">ABOUT ME</h1>
        <div className = "w-full h-[60%] flex flex-col xl:flex-row container">
            <div id="about-content" className="h-5/6 w-full xl:w-5/12 h-full relative">
                <h2 className="text-outline text-3xl absolute left-4 tracking-wider">My Story</h2>
                <p className = "relative h-5/6 w-full text-pretty text-white font-semibold flex flex-col flex-wrap gap-4 pt-12 px-5 border-solid rounded-lg md:rounded-xl border-b-2 xl:border-b-0 xl:border-r-2 pb-10 xl:pb-0">
                    {myStorySummary}
                    <span id = "story-read-more" className="text-[var(--yellow-color)] cursor-pointer" onClick={openModal}>Read More</span>
                </p>
            </div>
            <Skills/>
            <Modal screenType = "small" title = "My Story" colorTheme = "yellow" content = {myStory} closeModal={closeModal}/>
        </div>
    </div>
  )
}

export default About