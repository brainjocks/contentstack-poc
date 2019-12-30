import React from "react"

const Hero = (props) => {
  return (
    <div className="score-hero">
      <div className='score-header-image'>
        <img src={props.src} alt={props.alt}/>
      </div>
      <h1>{props.h1}</h1>
      <h2>{props.h2}</h2>
      <div className='score-hero-body'>
        {props.body}
      </div>
      <div className='score-call-to-action'>
        {props.children}
      </div>
    </div>
  )
}

export default Hero