import { useEffect, useState } from 'react';
import styles from '../css/about.module.css';

const AboutCard = ({id, reverse, cardData}) => {
  let cardClasses = {
    basic: "m-auto mb-64 pt-40 flex w-full h-[80vh] justify-evenly items-start",
    flexDirection: !reverse? "flex-row" : "flex-row-reverse",
    colorTheme: cardData.colorTheme? cardData.colorTheme: "",
      };
      
  const [cardClassList, setCardClassList] = useState("");

  useEffect(() => {
    setCardClassList(Object.values(cardClasses).join(" "));
  }, [])
  return (
    <div id = {`${id}`} className={cardClassList}>
        <div id = {`${id}-backgroundDecoration`} className = {`hidden xl:block absolute top-1/2 -translate-y-1/2 border-solid ${!reverse? 'right-0 rounded-l-[200px] border-l-4 translate-x-[9vw]':'left-0 rounded-r-[200px] border-r-4 -translate-x-[9vw]'} h-3/4 w-1/3 bg-dark-color`}>
          <div className = {`absolute h-full border-solid ${!reverse? '-right-2 border-l-4 rounded-full':'-left-2 border-r-4 rounded-full'}`}>
          < div className = {`absolute h-full border-solid ${!reverse? '-right-2 border-l-4 rounded-full':'-left-2 border-r-4 rounded-full'}`}></div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-96 w-1/2">
          {cardData.title && 
            <h1 id = {`${id}-title`} className="z-10 text-5xl tracking-wider font-bold mb-4 text-outline">
              {cardData.title}
            </h1>
          }
          {cardData.mainDescription &&
            <p id = {`${id}-main-description`} className="z-10 text-xl tracking-wide">
              {cardData.mainDescription}
            </p>
          }
          {cardData.subDescription &&
            <p id = {`${id}-sub-description`} className="z-10 text-xl tracking-wide">
              {cardData.subDescription}
            </p>
          }
        </div>
        <div id = {`${id}-img`} className = "z-10 w-96 h-96 bg-dark-color flex flex-col justify-end rounded-xl overflow-hidden border-4 border-solid border-sky-700">
            <img alt = "picture that discribes the description" src = {cardData.image} className='w-full h-full'></img>
        </div>
    </div>
  )
}

export default AboutCard