import React from "react"

const SectionHero = (props) => {
  return (
    <div className="score-document-header-with-subtitle (custom class)">
      <div className='score-header-image'>
        <img src={props.src} alt={props.alt}/>
      </div>
      <h2>{props.h1}</h2>
      <h3>{props.h2}</h3>
      <div className='score-hero-body'>
        {props.body}
      </div>
      <div className='score-call-to-action'>
        {props.children}
      </div>
    </div>
  )
}

export default SectionHero