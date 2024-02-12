import React from 'react'
import Skill from './Skill'
import { technicalSkills, softSkills } from '../utils/skillsData'

const Skills = () => {
  return (
    <div id = "skills" className = "h-full md:h-[350px] xl:h-5/6 w-full xl:w-7/12 yellow relative">
        <h2 id = "skills-title" className="text-outline text-3xl absolute top-4 xl:top-0 left-4 tracking-wider">Skills</h2>
        <div className="h-full w-full flex flex-col flex-wrap gap-4 pt-16 xl:pt-12 px-5 xl:px-20 rounded-lg md:rounded-xl border-solid border-t-2 xl:border-t-0 xl:border-l-2">
            {technicalSkills.length > 0 &&
                technicalSkills.map(skill => <Skill key = {skill.id} skillData = {skill} colorTheme={"yellow"}/>)
            }
        </div>
    </div>
    /* PREVIOUS IMPLEMENTATION */
    // <div id = "skills" className = "w-screen mt-[400px] pt-40 min-h-[100vh] bg-dark-color yellow flex flex-col items-center">
    //     <h1 id = "skills-title" className = "text-outline text-6xl">SKILLS</h1>
    //     <div id="skills-conatiner" className="container flex flex-col h-auto md:min-h-[500px] md:flex-row justify-evenly gap-4">
    //         <div id="technical-skills" className = "p-4 md:p-0 w-full flex flex-col md:w-1/2 h-auto md:min-h-full border-solid border-b-2 md:border-b-0 md:border-r-2">
    //             <h2 className="tracking-wider text-outline text-3xl self-center">
    //                 Technical skills
    //             </h2>
    //             <div className="h-full flex flex-col gap-4 pt-4 px-5 md:px-20">
    //                 {technicalSkills.length > 0 &&
    //                     technicalSkills.map(skill => <Skill skillData = {skill} colorTheme={"yellow"}/>)
    //                 }
    //             </div>
    //         </div>
    //         <div id="soft-skills" className = "orange p-4 md:p-0 w-full flex flex-col md:w-1/2 h-auto md:min-h-full border-solid border-t-2 md:border-t-0 md:border-l-2">
    //             <h2 className="tracking-wider text-outline text-3xl self-center">
    //                 Soft skills
    //             </h2>
    //             <div className="h-full flex flex-col gap-4 pt-4 px-5 md:px-20">
    //                 {softSkills.length > 0 &&
    //                     softSkills.map(skill => <Skill skillData = {skill} colorTheme={"orange"}/>)
    //                 }
    //             </div>
    //         </div>
    //     </div>
    // </div>
  )
}

export default Skills