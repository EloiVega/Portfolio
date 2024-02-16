import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div id = "footer" className = "w-screen h-[310px] sm:h-[250px] px-10 py-3 bg-dark-color flex flex-col justify-between text-gray-200 font-bold">
        <h1 className = "text-xl">Feel free to contact me!</h1>
        <div id="footer-content" className="w-full h-2/3 my-4 sm:my-0 flex flex-col sm:flex-row justify-evenly items-start sm:items-center">
            <div id="footer-info" className="flex flex-col gap-2">
                <span>eslamonsy56@gmail.com</span>
                <span>(+2) 01000226451</span>
                <span></span>
                <span></span>
            </div>
            <div id="footer-links" className="max-w-[350px] text-3xl flex flex gap-4">
                <a href="https://www.linkedin.com/in/eslam-onsy-b88313186/" target = "_blank" className = "sm:hover:scale-125 transition">
                  <FontAwesomeIcon icon={faLinkedin}/>
                </a>
                <a href="https://github.com/EloiVega" target = "_blank" className = "sm:hover:scale-125 transition">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                {/* <a href="https://www.facebook.com" target = "_blank">
                  <FontAwesomeIcon icon={faFacebookF}/>
                </a> */}
                {/* <a href="https://www.instagram.com" target = "_blank">
                  <FontAwesomeIcon icon={faInstagram}/>
                </a> */}
            </div>
        </div>
        <div id="copyrights" className="text-xl flex justify-between flex-col md:flex-row gap-2 px-2 text-gray-200 py-4 border-t-2 border-gray-200/70">
        <span>©Portfolio Eslam Onsy Rashwan 2024</span>
        <span className = "font-serif">Made By <span className = "italic text-[var(--orange-color)]">Eslam Onsy</span></span>
        </div>
    </div>
  )
}

export default Footer