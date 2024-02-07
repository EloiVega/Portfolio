import { useEffect, useState } from 'react';
import styles from '../css/about.module.css';

const ProjectCard = ({id, reverse, cardData}) => {
  let cardClasses = {
    basic: "m-auto mb-64 pt-40 flex w-[95vw] md:w-[80vw] h-[100vh] md:h-[80vh] justify-center md:justify-evenly items-center flex-col gap-8 xl:gap-0 text-center",
    flexDirection: !reverse? "xl:flex-row" : "xl:flex-row-reverse",
    colorTheme: cardData.colorTheme? cardData.colorTheme: "",
      };
      
  const [cardClassList, setCardClassList] = useState("");

  useEffect(() => {
    setCardClassList(Object.values(cardClasses).join(" "));
  }, [])
  return (
    <div id = {`${id}`} className={`${cardClassList}`}>
        {/* DECORATIONS */}
        <div id = {`${id}-backgroundDecoration`} 
            className = {
                `
                hidden xl:block 
                absolute 
                top-1/2 
                border-solid 
                -translate-y-1/3
                ${!reverse? '-right-4 rounded-l-[200px] border-l-4 translate-x-[9vw]'
                        :   '-left-4 rounded-r-[200px] border-r-4 -translate-x-[9vw]'} 
                h-full w-1/3 
                bg-dark-color`}>
            <div className = {`absolute h-full border-solid ${!reverse? '-right-2 border-l-4 rounded-l-[200px]':'-left-2 border-r-4 rounded-r-[200px]'}`}>
                <div className = {`absolute h-full border-solid ${!reverse? '-right-2 border-l-4 rounded-l-[200px]':'-left-2 border-r-4 rounded-r-[200px]'}`}></div>
            </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center items-center font-bold w-full xl:min-w-[600px] xl:w-1/2">
          {cardData.title && 
            <h1 id = {`${id}-title`} className="z-10 text-4xl md:text-5xl tracking-wider mb-4 text-outline">
              {cardData.title}
            </h1>
          }
          {cardData.mainDescription &&
            <p id = {`${id}-main-description`} className="z-10 mb-1 text-white/90 text-[13px] md:text-xl tracking-wide">
              {cardData.mainDescription}
            </p>
          }
          {cardData.subDescription &&
            <p id = {`${id}-sub-description`} className="z-10 mb-1 text-white/80 text-[13px] md:text-xl tracking-wide">
              {cardData.subDescription}
            </p>
          }
          {cardData.technologies &&
            <p id = {`${id}-technologies`} className="z-10 mt-2 text-white/80 text-2xl text-outline tracking-widest">
              {cardData.technologies.join(", ")}
            </p>
          }
        </div>
        <div id = {`${id}-img`} className = "relative z-10 w-[350px] md:min-w-[450px] xl:min-w-[600px] min-h-[200px] md:h-96 bg-dark-color flex flex-col justify-end rounded-xl border-4 border-solid border-sky-700">
            <img id = "img1" alt = "picture that discribes the description" src = {cardData.image} className='w-full h-full'></img>
            <img id = "img2" alt = "picture that discribes the description" src = {cardData.mobileImage} className={`w-[75px] md:w-[100px] xl:w-[150px] h-[150px] md:h-[200px] xl:h-[275px] border-solid border-2 rounded-lg absolute ${reverse? "-left-2 md:-left-8" :"-right-2 md:-right-8"} -bottom-4`}></img>
        </div>
    </div>
  )
}

export default ProjectCard