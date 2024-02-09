const Skill = ({skillData, colorTheme}) => {
  return (
    <div id = {skillData.id} className = {`flex gap-4 items-center`}>
        <h1 className = "text-2xl text-white w-64 font-semibold">{skillData.title}:</h1>
        <div id = "progress-bar" className= {`relative grow h-4 bg-slate-900/50 overflow-hidden rounded-full ${colorTheme}`}>
            <div id = "progress-fill" className = {`w-full h-full absolute top-1/2 left-0 -translate-y-1/2 w-full origin-left themeBackground`}/>
        </div>
    </div>
  )
}

export default Skill