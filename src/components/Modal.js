import gsap from "gsap";

const Modal = ({screenType, colorTheme, closeModal, title, content}) => {
  setTimeout(() => {
    // gsap.fromTo("#modal", {height: "85%", autoAlpha: 0}, {height: "90%", autoAlpha:1, duraiton:0.3})
    
  }, 10)
  return (
    <div className = {`modal fixed left-0 top-0 w-screen h-screen flex justify-center items-center ${colorTheme} modal-closed`}>
        <div id="backdrop" onClick = {() => closeModal()} className="absolute z-40 top-0 left-0 w-full h-full bg-black/60"/>
        <div id = "modal" className = {`relative z-50 ${screenType === "small"? "w-11/12 md:w-[720px]" : "container"} pt-5 pl-4 md:pl-10 h-[80vh] bg-dark-color rounded-xl border-solid border-2`}>
            <span onClick={()=> closeModal()} className = "text-outline text-3xl absolute right-8 md:right-10 top-5 md:top-5 cursor-pointer">X</span>
            <h1 id = "modal-title" className = "text-outline text-3xl tracking-widest">{title}</h1>
            <div id = "modal-content" className = "h-[90%] w-[97%] md:w-[95%] pr-4 md:pr-10 mt-5 overflow-y-scroll scroll-yellow">
                {content?.map((item) => (
                    <p className="modal-item text-lg text-white mb-10">{item}</p>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Modal